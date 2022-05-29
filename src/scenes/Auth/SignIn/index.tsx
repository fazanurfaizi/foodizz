import { FormInput, SocialButton } from '@components/Forms';
import { SignInDto, SignInSchema } from '@dto/auth/SignInDto';
import { AppRoute } from '@types/app.routes';
import { SignInScreenProps } from '@navigation/auth.navigator';
import { GenericNavigationProps } from '@types/navigation.types';
import { useNavigation } from '@react-navigation/core';
import { Button, CheckBox, Layout, LayoutElement } from '@ui-kitten/components';
import { Icon } from '@ui-kitten/components';
import { Formik, FormikProps } from 'formik';
import React, { useState } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import theme, { globalStyle } from '@theme';

export const SignIn = (props: SignInScreenProps): LayoutElement => {
	const [shouldRemember, setShouldRemember] = useState<boolean>(false);
	const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
	const navigation = useNavigation<GenericNavigationProps>();

	const onFormSubmit = (values: SignInDto): void => {
		console.log(values);
		props.navigation.navigate(AppRoute.HOME);
	};

	const onPasswordIconPress = (): void => {
		setPasswordVisible(!passwordVisible);
	};

	const navigateResetPassword = (): void => {
		props.navigation.navigate(AppRoute.RESET_PASSWORD);
	};

	const navigateSignUp = (): void => {
		props.navigation.navigate(AppRoute.SIGN_UP);
	};

	const renderIcon = props => (
		<TouchableWithoutFeedback onPress={onPasswordIconPress}>
			<Icon {...props} name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} />
		</TouchableWithoutFeedback>
	);

	const renderForm = (props: FormikProps<SignInDto>) => (
		<React.Fragment>
			<FormInput 
				id="email" 
				style={styles.formControl} 
				placeholder="Email" 
				keyboardType="email-address" />
			<FormInput
				id="password"
				style={styles.formControl}
				placeholder="Password"
				secureTextEntry={!passwordVisible}
				accessoryRight={renderIcon}
			/>
			<View style={styles.resetPasswordContainer}>
				<CheckBox style={styles.formControl} checked={shouldRemember} onChange={setShouldRemember}>
					Remember Me
				</CheckBox>
				<Button appearance="ghost" status="basic" onPress={navigateResetPassword}>
					Forgot password?
				</Button>
			</View>
			<Button style={styles.submitButton} onPress={props.handleSubmit}>
				SIGN IN
			</Button>
		</React.Fragment>
	);

	return (
		<KeyboardAwareScrollView contentContainerStyle={[globalStyle.fullContainer, styles.container]}>
			<View style={[globalStyle.justifyCenter, globalStyle.alignCenter]}>
				<Image                 
					source={require('@assets/images/Logo.png')}
					style={[styles.logo]}
				/>    	
			</View>  
			<Layout style={styles.formContainer}>
				<Formik initialValues={SignInDto.empty()} validationSchema={SignInSchema} onSubmit={onFormSubmit}>
					{renderForm}
				</Formik>
				<Button style={styles.noAccountButton} appearance="ghost" status="basic" onPress={navigateSignUp}>
					Don't have an account?
				</Button>
				<View style={[globalStyle.justifyCenter, globalStyle.alignCenter]}>
					<SocialButton
						title='Sign in with Google'
						icon='google'
						color='#de4d41'
						backgroundColor='#f5e7ea'
					/>
					<SocialButton
						title='Sign in with Facebook'
						icon='facebook'
						color='#4867aa'
						backgroundColor='#e6eaf4'
					/>
				</View>
			</Layout>
		</KeyboardAwareScrollView>
	);
};
