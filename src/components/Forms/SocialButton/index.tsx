import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

type SocialButtonProps = {
    title: string,
    icon: string,
    color: string,
    backgroundColor: string,    
}

export const SocialButton = ({
	title,  
    icon,
    color,
    backgroundColor,
    ...rest
}: SocialButtonProps) => {
	return (
		<TouchableOpacity 
			style={[styles.container, { backgroundColor: backgroundColor }]}
			{...rest}
		>
			<View style={styles.iconWrapper}>
				<FontAwesome name={icon} style={styles.icon} size={22} color={color} />
			</View>
			<View style={styles.btnWrapper}>
				<Text style={[styles.btnText, { color: color }]}>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	)
}
