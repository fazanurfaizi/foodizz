import { FormInput } from '@components/Forms';
import { SignUpDto, SignUpSchema } from '@dto/auth/SignUpDto';
import { AppRoute, GenericNavigationProps } from '@navigation/types';
import { StackActions, useNavigation } from '@react-navigation/core';
import { Button, Layout, LayoutElement } from '@ui-kitten/components';
import { Formik, FormikProps } from 'formik';
import React, { useCallback } from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import { globalStyle } from '@theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NHCSafeAreaView from '@components/NHCSafeAreaView';
import GenericHeader from '@components/GenericHeader';

export const SignUp = (): LayoutElement => {
	// const dispatch = useDispatch();
	const navigation = useNavigation<GenericNavigationProps>();
	const popAction = useCallback(() => StackActions.pop(), []);	

	const onFormSubmit = (values: SignUpDto): void => {
		console.log(values);
		navigation.navigate(AppRoute.HOME);
	};

	const navigateSignIn = (): void => {
		navigation.navigate(AppRoute.SIGN_IN);
	};

	const goBack = useCallback(() => {
		navigation.dispatch(popAction);
	}, [navigation, popAction]);

	const renderForm = (props: FormikProps<SignUpDto>) => (
		<React.Fragment>
			<FormInput 
				id="username" 
				style={styles.formControl} 
				placeholder="Username" 
			/>
			<FormInput 
				id="email" 
				style={styles.formControl} 
				placeholder="Email" 
				keyboardType="email-address" 
			/>
			<FormInput 
				id="password" 
				style={styles.formControl} 
				placeholder="Password" 
			/>
			<FormInput 
				id="passwordConfirmation" 
				style={styles.formControl} 
				placeholder="Password Confirmation" 
			/>
			<Button style={styles.submitButton} onPress={props.handleSubmit}>
				SIGN UP
			</Button>
		</React.Fragment>
	);

	return (
		<NHCSafeAreaView>
			<GenericHeader onBackClicked={goBack} title='Sign Up' />

			<KeyboardAwareScrollView contentContainerStyle={[globalStyle.fullContainer, styles.container]}>
				<View style={[globalStyle.justifyCenter, globalStyle.alignCenter]}>
					<Image                 
						source={require('@assets/images/Logo.png')}
						style={[styles.logo]}
					/>    	
				</View> 			
				<Layout style={styles.formContainer}>
					<Formik initialValues={SignUpDto.empty()} validationSchema={SignUpSchema} onSubmit={onFormSubmit}>
						{renderForm}
					</Formik>
					<Button style={styles.haveAccountButton} appearance="ghost" status="basic" onPress={navigateSignIn}>
						Already have an account?
					</Button>
				</Layout>
			</KeyboardAwareScrollView>
		</NHCSafeAreaView>		
	);
};
