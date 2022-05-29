import { BackIcon, MoreVerticalIcon } from '@components/Icon';
import {
	IndexPath,
	OverflowMenu,
	StyleType,
	TopNavigation,
	TopNavigationAction,
	TopNavigationActionElement,
	TopNavigationProps,
} from '@ui-kitten/components';
import React, { useState } from 'react';
import { ImageProps } from 'react-native';

export interface ToolbarProps extends TopNavigationProps {
	menu?: () => React.ReactElement;
	backIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
	menuIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
	onBackPress?: () => void;
}

export const Toolbar = (props: ToolbarProps): TopNavigationActionElement => {
	const { menu, backIcon, menuIcon, onBackPress, ...topNavigationProps } = props;
	const [menuVisible, setMenuVisible] = useState<boolean>(false);

	const onMenuSelect = (index: IndexPath) => {
		console.log(index);
		setMenuVisible(false);
	};

	const onMenuActionPress = () => {
		setMenuVisible(!menuVisible);
	};

	const renderMenuAnchorAction = (): TopNavigationActionElement => (
		<TopNavigationAction icon={menuIcon ?? MoreVerticalIcon} onPress={onMenuActionPress} />
	);

	const renderMenuAction = (): TopNavigationActionElement => (
		<OverflowMenu
			visible={menuVisible}
			anchor={renderMenuAnchorAction}
			placement="bottom end"
			onSelect={onMenuSelect}
			onBackdropPress={onMenuActionPress}>
			{menu()}
		</OverflowMenu>
	);

	const renderBackAction = (): TopNavigationActionElement => (
		<TopNavigationAction
			//@ts-ignore
			icon={backIcon ?? BackIcon}
			onPress={onBackPress}
		/>
	);

	return (
		<TopNavigation
			{...topNavigationProps}
			alignment="center"
			accessoryLeft={onBackPress && renderBackAction}
			accessoryRight={menu && renderMenuAction}
		/>
	);
};
