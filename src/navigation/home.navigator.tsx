import { HomeDrawer } from '@components/HomeDrawer';
import HomeTabBar from '@components/HomeTabBar';
import { HomeIcon, InfoIcon, LayoutIcon, PersonIcon } from '@components/Icon';
import { BottomTabBarProps, BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerNavigationProp } from '@react-navigation/drawer';
import OtherPage from '@scenes/OtherPage';
import React, { FC } from 'react';
import { AppRoute } from '@types/app.routes';
import { ProfileNavigator } from './profile.navigator';
import { TodoNavigator } from './todo.navigator';

type HomeDrawerNavigatorParams = {
	[AppRoute.HOME]: undefined;
	[AppRoute.ABOUT]: undefined;
};

type HomeBottomTabsNavigatorParams = {
	[AppRoute.TODO]: undefined;
	[AppRoute.PROFILE]: undefined;
};

export type TodoTabNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.TODO>,
	DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>
>;

export type ProfileTabNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.PROFILE>,
	DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>
>;

export interface AboutScreenProps {
	navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
	route: RouteProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
}

export type BottomHomeScreenProps = BottomTabBarProps & {
	navigation: TodoTabNavigationProp;
};

export type DrawerHomeScreenProps = DrawerContentComponentProps & {
	navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>;
};

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const HomeBottomNavigator: FC = () => (
	// @ts-ignore: `tabBar` also contains a DrawerNavigationProp
	<BottomTab.Navigator tabBar={props => <HomeTabBar {...props} />}>
		<BottomTab.Screen
			name={AppRoute.TODO}
			component={TodoNavigator}
			options={{
				title: 'TODO',
				tabBarIcon: LayoutIcon,
				headerShown: false,
			}}
		/>
		<BottomTab.Screen
			name={AppRoute.PROFILE}
			component={ProfileNavigator}
			options={{
				title: 'PROFILE',
				tabBarIcon: PersonIcon,
				headerShown: false,
			}}
		/>
	</BottomTab.Navigator>
);

export const HomeNavigator: FC = () => {
	return (
		// @ts-ignore: `drawerContent` also contains a DrawerNavigationProp
		<Drawer.Navigator drawerContent={HomeDrawer}>
			<Drawer.Screen
				name={AppRoute.HOME}
				component={HomeBottomNavigator}
				options={{
					title: 'Home',
					drawerIcon: HomeIcon,
					headerShown: false,
				}}
			/>
			<Drawer.Screen
				name={AppRoute.ABOUT}
				component={OtherPage}
				options={{
					title: 'About',
					drawerIcon: InfoIcon,
					headerShown: false,
				}}
			/>
		</Drawer.Navigator>
	);
};
