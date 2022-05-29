import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppRoute } from './app.routes';
import { AuthNavigator } from './auth.navigator';
import { HomeNavigator } from './home.navigator';

type StackNavigationProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorProps = {
	[AppRoute.AUTH]: undefined;
	[AppRoute.HOME]: undefined;
};

const Stack = createStackNavigator<AppNavigatorProps>();

export const AppNavigator = (props: Partial<StackNavigationProps>): React.ReactElement => (
	<Stack.Navigator {...props} screenOptions={{ headerMode: 'screen' }}>
		<Stack.Screen
			name={AppRoute.AUTH}
			component={AuthNavigator}
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen
			name={AppRoute.HOME}
			component={HomeNavigator}
			options={{
				headerShown: false,
			}}
		/>
	</Stack.Navigator>
);
