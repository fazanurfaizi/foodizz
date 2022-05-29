import { InfoIcon, LogoutIcon, MenuIcon } from '@components/Icon';
import { SafeAreaLayout, SaveAreaInset, SafeAreaLayoutElement } from '@components/SafeAreaLayout';
import { Toolbar } from '@components/Toolbar';
import { AppRoute } from '@navigation/app.routes';
import { TodoScreenProps } from '@navigation/todo.navigator';
import { GenericNavigationProps } from '@navigation/types';
import { useNavigation } from '@react-navigation/core';
import { TabBar, Tab, Divider, TabElement, MenuItem } from '@ui-kitten/components';
import React from 'react';

export const TodoTabBar = (props: TodoScreenProps): SafeAreaLayoutElement => {
	const navigation = useNavigation<GenericNavigationProps>();

	const onMenuItemSelect = (index: number): void => {
		const { [index]: selectedItem } = menu;

		switch (selectedItem.title) {
			case 'Log Out':
				navigation.navigate(AppRoute.AUTH);
				break;
			default:
				navigation.navigate(selectedItem.title);
				break;
		}
	};

	const onTabSelect = (index: number): void => {
		const selectedTabRoute: string = props.state.routeNames[index];
		navigation.navigate(selectedTabRoute);
	};

	const createNavigationTabForRoute = (route): TabElement => {
		const { options } = props.descriptors[route.key];
		return (
			<Tab
				key={route.key}
				title={options.title}
				// @ts-ignore: all Tab Screens options strictly have UI Kitten Icon
				icon={options.tabBarIcon}
			/>
		);
	};

	const renderToolbarMenu = (): React.ReactElement => (
		<React.Fragment>
			<MenuItem title="About" accessoryLeft={InfoIcon} />
			<MenuItem title="Log Out" accessoryLeft={LogoutIcon} />
		</React.Fragment>
	);

	return (
		<SafeAreaLayout insets={SaveAreaInset.TOP}>
			<Toolbar
				title="React Navigation Ex 🐱"
				onMenuItemSelect={onMenuItemSelect}
				menu={renderToolbarMenu}
				backIcon={MenuIcon}
				onBackPress={props.navigation.toggleDrawer}
			/>
			<TabBar selectedIndex={props.state.index} onSelect={onTabSelect}>
				{props.state.routes.map(createNavigationTabForRoute)}
			</TabBar>
			<Divider />
		</SafeAreaLayout>
	);
};
