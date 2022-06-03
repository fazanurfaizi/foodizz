import { KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import styles from './styles';
import { Input, InputProps } from '@ui-kitten/components';

export const TextInput = ({ ...props }: InputProps) => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.inputFrame}
		>
			<Input
				style={styles.input}				
				placeholderTextColor="#666"
				{...props}
			/>
		</KeyboardAvoidingView>
	)
}
