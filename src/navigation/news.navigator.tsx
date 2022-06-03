import React, { FC } from 'react';
import { Article } from "@models/article";
import { createStackNavigator } from "@react-navigation/stack";
import { News } from "@scenes/Home/News";
import { NewsDetail } from "@scenes/Home/NewsDetail";
import { AppRoute } from "./app.routes";

export type NewsNavigatorParams = {
	[AppRoute.NEWS]: undefined;
	[AppRoute.NEWS_DETAIL]: {article: Article}
}

const Stack = createStackNavigator<NewsNavigatorParams>();

export const NewsNavigator: FC = () => (
	<Stack.Navigator screenOptions={{ headerMode: 'screen' }}>
		<Stack.Screen
			name={AppRoute.NEWS}
			component={News}
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen
			name={AppRoute.NEWS_DETAIL}
			component={NewsDetail}
			options={{
				headerShown: false,
			}}
		/>
	</Stack.Navigator>
)
