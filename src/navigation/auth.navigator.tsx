import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp, EmailVerification } from '@scenes/Auth';
import React from 'react';
import { AppNavigatorProps } from './app.navigator';
import { AppRoute } from '@navigation/types';
import { routeOverlayOption } from '@options/routeOptions';

type StackNavigationProps = React.ComponentProps<typeof Stack.Navigator>;

type AuthNavigatorParams = AppNavigatorProps & {
	[AppRoute.SIGN_IN]: undefined;
	[AppRoute.SIGN_UP]: undefined;
	[AppRoute.RESET_PASSWORD]: undefined;
	[AppRoute.EMAIL_VERIFICATION]: undefined
};

const Stack = createStackNavigator<AuthNavigatorParams>();

export const AuthNavigator = (props: Partial<StackNavigationProps>): React.ReactElement => (
	<Stack.Navigator {...props} screenOptions={{ headerMode: 'screen', presentation: 'modal', ...routeOverlayOption }}>
		<Stack.Screen
			name={AppRoute.SIGN_IN}
			component={SignIn}
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen 
			name={AppRoute.SIGN_UP}
			component={SignUp} 
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen
			name={AppRoute.EMAIL_VERIFICATION}
			component={EmailVerification}
		/>
	</Stack.Navigator>
);
