import { MenuIcon } from '@components/Icon';
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '@components/SafeAreaLayout';
import { Toolbar } from '@components/Toolbar';
import { ProfileScreenProps } from '@navigation/profile.navigator';
import { Divider, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import styles from './styles';

export const ProfileScreen = (props: ProfileScreenProps): SafeAreaLayoutElement => {
	return (
		<SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
			<Toolbar title="React Navigation Ex 🐱" backIcon={MenuIcon} onBackPress={props.navigation.toggleDrawer} />
			<Divider />
			<Layout style={styles.container}>
				<Text category="h1">PROFILE</Text>
			</Layout>
		</SafeAreaLayout>
	);
};
