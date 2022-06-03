import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import styles from './styles';

type Props = {
	mainElement: JSX.Element;
	badgeElement: JSX.Element;
	mainViewStyle?: StyleProp<ViewStyle>;
	iconBadgeStyle?: StyleProp<ViewStyle>;
	hidden?: boolean;
}

export const NotificationBadge = ({
	mainElement,
	badgeElement,
	mainViewStyle,
	iconBadgeStyle,
	hidden
}: Props) => {
	return (
		<View style={[mainViewStyle || {}]}>
			{mainElement}
			{!hidden && (
				<View style={[styles.IconBadge, iconBadgeStyle || {}]}>
					{badgeElement}
				</View>
			)}
		</View>
	)
}
