import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ProfileScreen } from '@scenes/Profile';
import React from 'react';
import { AppRoute } from './app.routes';
import { ProfileTabNavigationProp } from './home.navigator';

type ProfileNavigatorParams = {
	[AppRoute.PROFILE]: undefined;
};

export interface ProfileScreenProps {
	navigation: CompositeNavigationProp<
		ProfileTabNavigationProp,
		StackNavigationProp<ProfileNavigatorParams, AppRoute.PROFILE>
	>;
	route: RouteProp<ProfileNavigatorParams, AppRoute.PROFILE>;
}

const Stack = createStackNavigator<ProfileNavigatorParams>();

export const ProfileNavigator = (): React.ReactElement => (
	<Stack.Navigator>
		<Stack.Screen
			name={AppRoute.PROFILE}
			component={ProfileScreen}
			options={{
				headerShown: false,
			}}
		/>
	</Stack.Navigator>
);
