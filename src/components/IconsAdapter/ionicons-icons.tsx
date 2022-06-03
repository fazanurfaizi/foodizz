import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const createIconsMap = () => {
	return new Proxy(
		{},
		{
			get(_target, name) {
				return IconProvider(name);
			},
		},
	);
};

const IconProvider = name => ({
	toReactElement: props => IoniconsIcon({ name, ...props }),
});

const IoniconsIcon = ({ name, style }) => {
	const { ...iconStyle } = StyleSheet.flatten(style);
	return <Icon name={name} size={18} color='black' style={iconStyle} />;
};

export const IoniconsIconsPack = {
	name: 'Ionicons',
	icons: createIconsMap(),
};
