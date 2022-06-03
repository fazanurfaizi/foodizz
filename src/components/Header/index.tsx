import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { MenuIcon, PersonIcon } from '@components/Icon'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Header = () => {
	return (
		<View>
			{/* left */}
			<TouchableOpacity style={styles.left}>
				<PersonIcon />
				<Text style={[styles.leftText]}>
					NEWS
				</Text>
			</TouchableOpacity>
			{/* right */}
			<View style={styles.right}>	
				<MenuIcon />
			</View>
		</View>
  	)
}

export default Header
