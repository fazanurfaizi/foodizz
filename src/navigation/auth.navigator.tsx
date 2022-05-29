import { RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { SignIn, SignUp } from '@scenes/Auth';
import React from 'react';
import { AppNavigatorProps } from './app.navigator';
import { AppRoute } from './app.routes';

type StackNavigationProps = React.ComponentProps<typeof Stack.Navigator>;

type AuthNavigatorParams = AppNavigatorProps & {
	[AppRoute.SIGN_IN]: undefined;
	[AppRoute.SIGN_UP]: undefined;
	[AppRoute.RESET_PASSWORD]: undefined;
};

export interface SignInScreenProps {
	navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
	route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
}

export interface SignUpScreenProps {
	navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_UP>;
	route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_UP>;
}

export interface ResetPasswordScreenProps {
	navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.RESET_PASSWORD>;
	route: RouteProp<AuthNavigatorParams, AppRoute.RESET_PASSWORD>;
}

const Stack = createStackNavigator<AuthNavigatorParams>();

export const AuthNavigator = (props: Partial<StackNavigationProps>): React.ReactElement => (
	<Stack.Navigator {...props}>
		<Stack.Screen
			name={AppRoute.SIGN_IN}
			component={SignIn}
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen name={AppRoute.SIGN_UP} component={SignUp} />
	</Stack.Navigator>
);
