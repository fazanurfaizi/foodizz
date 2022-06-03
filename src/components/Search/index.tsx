import { View, Text, TouchableOpacity } from 'react-native'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import Animated, { EasingNode } from 'react-native-reanimated';
import { windowWidth } from '@utils/Dimensions';
import styles from './styles';
import { FormInput } from '@components/Forms';
import { CloseIcon, SearchIcon } from '@components/Icon';
import { TextInput } from '@components/Forms/TextInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

type Props = {
	query: string;
	setQuery: Dispatch<SetStateAction<string>>;
	setIsSubmit: (isSubmit: boolean) => void
}

export const Search = ({ query, setQuery, setIsSubmit }: Props) => {

	const widthValue = useRef(new Animated.Value(windowWidth / 3)).current
	
	const onToggleSearchFocus = (isFocused: boolean) => {
		Animated.timing(widthValue, {
			toValue: isFocused ? windowWidth / 2 : windowWidth / 3,
			duration: 250,
			easing: EasingNode.linear
		}).start()
	}

	const renderCloseIcon = props => (
		<TouchableWithoutFeedback 			
			onPress={() => {
				setIsSubmit(false)
				setQuery('')
			}}			
		>
			<CloseIcon {...props} />
		</TouchableWithoutFeedback>
	)

	const renderSearchIcon = props => (
		<TouchableWithoutFeedback 			
			onPress={() => onToggleSearchFocus(true)}			
		>
			<SearchIcon {...props} />
		</TouchableWithoutFeedback>
	)

	return (
		<View style={styles.container}>
			<Animated.View
				style={{
					alignItems: 'center',
					flexDirection: 'row',
					marginRight: 12,
					width: windowWidth / 3
				}}
			>
				<TextInput					
					style={styles.input}
					onFocus={() => onToggleSearchFocus(true)}
					onBlur={() => onToggleSearchFocus(false)}
					placeholder="Search News"
					onChangeText={(query) => setQuery(query)}					
					value={query}
					onSubmitEditing={() => query.length >= 3 && setIsSubmit(true)}
					accessoryRight={query ? renderCloseIcon : renderSearchIcon}					
				/>				
			</Animated.View>
		</View>
	)
}
