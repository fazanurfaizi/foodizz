import { DoneAllIcon, GridIcon } from '@components/Icon';
import { TodoTabBar } from '@components/TodoTabBar';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import {
	createMaterialTopTabNavigator,
	MaterialTopTabBarProps,
	MaterialTopTabNavigationProp,
} from '@react-navigation/material-top-tabs';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { TodoDetail, TodoDone, TodoInProgress } from '@scenes/ToDo';
import { TodoDetailRouteParams } from '@scenes/ToDo/Detail';
import React, { FC } from 'react';
import { AppRoute } from '@types/app.routes';
import { TodoTabNavigationProp } from './home.navigator';

type TodoNavigatorParams = {
	[AppRoute.TODO]: undefined;
	[AppRoute.TODO_DETAILS]: TodoDetailRouteParams;
};

type TodoTabsNavigatorParams = {
	[AppRoute.TODO_IN_PROGRESS]: undefined;
	[AppRoute.TODO_DONE]: undefined;
};

export type TodoScreenProps = MaterialTopTabBarProps & {
	navigation: TodoTabNavigationProp;
};

export interface TodoInProgressScreenProps {
	navigation: CompositeNavigationProp<
		TodoTabNavigationProp & StackNavigationProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>,
		MaterialTopTabNavigationProp<TodoTabsNavigatorParams, AppRoute.TODO_IN_PROGRESS>
	>;
	route: RouteProp<TodoTabsNavigatorParams, AppRoute.TODO_IN_PROGRESS>;
}

export interface TodoDoneScreenProps {
	navigation: CompositeNavigationProp<
		TodoTabNavigationProp & StackNavigationProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>,
		MaterialTopTabNavigationProp<TodoTabsNavigatorParams, AppRoute.TODO_DONE>
	>;
	route: RouteProp<TodoTabsNavigatorParams, AppRoute.TODO_DONE>;
}

export interface TodoDetailsScreenProps {
	navigation: StackNavigationProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>;
	route: RouteProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>;
}

const Stack = createStackNavigator<TodoNavigatorParams>();
const TopTab = createMaterialTopTabNavigator<TodoTabsNavigatorParams>();

const TodoTabsNavigator: FC = () => (
	// @ts-ignore: `tabBar` also contains a DrawerNavigationProp & BottomTabNavigationProp
	<TopTab.Navigator tabBar={props => <TodoTabBar {...props} />}>
		<TopTab.Screen
			name={AppRoute.TODO_IN_PROGRESS}
			component={TodoInProgress}
			options={{ title: 'IN PROGRESS', tabBarIcon: GridIcon }}
		/>
		<TopTab.Screen
			name={AppRoute.TODO_DONE}
			component={TodoDone}
			options={{ title: 'DONE', tabBarIcon: DoneAllIcon }}
		/>
	</TopTab.Navigator>
);

export const TodoNavigator: FC = () => (
	<Stack.Navigator screenOptions={{ headerMode: 'screen' }}>
		<Stack.Screen
			name={AppRoute.TODO}
			component={TodoTabsNavigator}
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen
			name={AppRoute.TODO_DETAILS}
			component={TodoDetail}
			options={{
				headerShown: false,
			}}
		/>
	</Stack.Navigator>
);
