import { FormInput } from '@components/Forms';
import { Toolbar } from '@components/Toolbar';
import { SignUpDto, SignUpSchema } from '@dto/auth/SignUpDto';
import { AppRoute } from '@navigation/app.routes';
import { SignUpScreenProps } from '@navigation/auth.navigator';
import { StackActions, useNavigation } from '@react-navigation/core';
import { Button, Layout, LayoutElement } from '@ui-kitten/components';
import { Formik, FormikProps } from 'formik';
import React, { useCallback } from 'react';
import { ImageBackground } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

export const SignUp = (): LayoutElement => {
	// const dispatch = useDispatch();
	const navigation = useNavigation();
	const popAction = useCallback(() => StackActions.pop(), []);

	const insets: EdgeInsets = useSafeAreaInsets();

	const onFormSubmit = (values: SignUpDto): void => {
		console.log(values);
		navigation.navigate({ key: AppRoute.HOME });
	};

	const navigateSignIn = (): void => {
		navigation.navigate({ key: AppRoute.SIGN_IN });
	};

	const goBack = useCallback(() => {
		navigation.dispatch(popAction);
	}, [navigation, popAction]);

	const renderForm = (props: FormikProps<SignUpDto>) => (
		<React.Fragment>
			<FormInput id="email" style={styles.formControl} placeholder="Email" keyboardType="email-address" />
			<FormInput id="password" style={styles.formControl} placeholder="Password" />
			<FormInput id="username" style={styles.formControl} placeholder="Username" />
			<Button style={styles.submitButton} onPress={props.handleSubmit}>
				SIGN UP
			</Button>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<ImageBackground
				style={[styles.appBar, { paddingTop: insets.top }]}
				source={require('@assets/images/image-background.jpeg')}>
				<Toolbar appearance="control" onBackPress={goBack} />
			</ImageBackground>
			<Layout style={styles.formContainer}>
				<Formik initialValues={SignUpDto.empty()} validationSchema={SignUpSchema} onSubmit={onFormSubmit}>
					{renderForm}
				</Formik>
				<Button style={styles.haveAccountButton} appearance="ghost" status="basic" onPress={navigateSignIn}>
					Already have an account?
				</Button>
			</Layout>
		</React.Fragment>
	);
};
