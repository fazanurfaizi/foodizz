import { DrawerHomeScreenProps } from '@navigation/home.navigator';
import { Drawer, DrawerItem, DrawerElement, DrawerItemElement, IndexPath } from '@ui-kitten/components';
import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';

export const HomeDrawer = (props: DrawerHomeScreenProps): DrawerElement => {
	const onItemSelect = (index: IndexPath): void => {
		const selectedTabRoute: string = props.state.routeNames[index.row];
		props.navigation.navigate(selectedTabRoute);
		props.navigation.closeDrawer();
	};

	const createDrawerItemForRoute = (route, index: number): DrawerItemElement => {
		const { options } = props.descriptors[route.key];
		return (
			<DrawerItem
				key={index}
				title={route.name}
				// @ts-ignore: all Tab Screens strictly have UI Kitten Icon
				accessoryLeft={options.drawerIcon}
			/>
		);
	};

	return (
		<Drawer
			header={() => (
				<ImageBackground style={styles.header} source={require('@assets/images/image-background.jpeg')} />
			)}
			onSelect={onItemSelect}>
			{props.state.routes.map(createDrawerItemForRoute)}
		</Drawer>
	);
};
