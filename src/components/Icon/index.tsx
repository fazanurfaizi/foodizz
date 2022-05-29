import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import React from 'react';
import { StyleProp } from 'react-native';

export const BackIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="arrow-back" />;

export const LayoutIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="layout-outline" />;

export const PersonIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="person-outline" />;

export const MoreVerticalIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="more-vertical" />;

export const LogoutIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="log-out-outline" />;

export const InfoIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="info-outline" />;

export const AlertTriangleIcon = (style: StyleProp<IconProps>): IconElement => (
	<Icon {...style} name="alert-triangle-outline" />
);

export const EyeIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="eye-outline" />;

export const EyeOffIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="eye-off-outline" />;

export const MenuIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="menu-outline" />;

export const HomeIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="home-outline" />;

export const DoneIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="checkmark-outline" />;

export const DoneAllIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="done-all-outline" />;

export const GridIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="grid-outline" />;

export const SearchIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="search-outline" />;

export const PlusIcon = (style: StyleProp<IconProps>): IconElement => <Icon {...style} name="plus-outline" />;
