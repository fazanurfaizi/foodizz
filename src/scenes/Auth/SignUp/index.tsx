import { FormInput } from '@components/Forms';
import { SignUpDto, SignUpSchema } from '@dto/auth/SignUpDto';
import { AppRoute, GenericNavigationProps } from '@navigation/types';
import { StackActions, useNavigation } from '@react-navigation/core';
import { Button, Icon, Layout, LayoutElement } from '@ui-kitten/components';
import { Formik, FormikProps } from 'formik';
import React, { useCallback, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { globalStyle } from '@theme';
import NHCSafeAreaView from '@components/NHCSafeAreaView';
import GenericHeader from '@components/GenericHeader';
import { SignUpRequest } from '@redux/actions';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const SignUp = (): LayoutElement => {
	const dispatch = useDispatch();
	const navigation = useNavigation<GenericNavigationProps>();
	const popAction = useCallback(() => StackActions.pop(), []);	
	
	const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

	const onPasswordIconPress = (): void => {
		setPasswordVisible(!passwordVisible);
	};

	const renderIcon = props => (
		<TouchableWithoutFeedback onPress={onPasswordIconPress}>
			<Icon {...props} name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} />
		</TouchableWithoutFeedback>
	);

	const onFormSubmit = (values: SignUpDto): void => {		
		dispatch(SignUpRequest(values))
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
				secureTextEntry={!passwordVisible}
				accessoryRight={renderIcon}
			/>
			<FormInput 
				id="passwordConfirmation" 
				style={styles.formControl} 
				placeholder="Password Confirmation" 
				secureTextEntry={!passwordVisible}
				accessoryRight={renderIcon}
			/>
			<Button style={styles.submitButton} onPress={props.handleSubmit}>
				SIGN UP
			</Button>
		</React.Fragment>
	);

	return (
		<NHCSafeAreaView>
			<GenericHeader onBackClicked={goBack} title='Sign Up' />
			<ScrollView>
				<View style={[globalStyle.justifyCenter, globalStyle.alignCenter]}>
					<Image                 
						source={require('@assets/images/Logo.png')}
						style={[styles.logo]}
					/>    	
				</View> 
				<View style={styles.inner}>
					<Layout style={styles.formContainer}>
						<Formik initialValues={SignUpDto.empty()} validationSchema={SignUpSchema} onSubmit={onFormSubmit}>
							{renderForm}
						</Formik>
						<Button style={styles.haveAccountButton} appearance="ghost" status="basic" onPress={navigateSignIn}>
							Already have an account?
						</Button>
					</Layout>
				</View>			
			</ScrollView>
		</NHCSafeAreaView>				
	);
};
