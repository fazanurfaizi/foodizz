import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '@components/SafeAreaLayout';
import { BottomHomeScreenProps } from '@navigation/home.navigator';
import { GenericNavigationProps } from '@navigation/types';
import { useNavigation } from '@react-navigation/core';
import { BottomNavigation, BottomNavigationTab, Divider, BottomNavigationTabElement } from '@ui-kitten/components';
import React from 'react';

function HomeTabBar(props: BottomHomeScreenProps): SafeAreaLayoutElement {
	const navigation = useNavigation<GenericNavigationProps>();

	const onSelect = (index: number): void => {
		const selectedTabRoute: string = props.state.routeNames[index];
		navigation.navigate(selectedTabRoute);
	};

	const createNavigationTabForRoute = (route): BottomNavigationTabElement => {
		const { options } = props.descriptors[route.key];
		return (
			<BottomNavigationTab
				key={route.key}
				title={options.title}
				// @ts-ignore: all Tab Screens strictly have UI Kitten Icon
				icon={options.tabBarIcon}
			/>
		);
	};

	return (
		<SafeAreaLayout insets={SaveAreaInset.BOTTOM}>
			<Divider />
			<BottomNavigation appearance="noIndicator" selectedIndex={props.state.index} onSelect={onSelect}>
				{props.state.routes.map(createNavigationTabForRoute)}
			</BottomNavigation>
		</SafeAreaLayout>
	);
}

export default HomeTabBar;
