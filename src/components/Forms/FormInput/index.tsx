import { Icon, Input, InputElement, InputProps } from '@ui-kitten/components';
import { useFormikContext } from 'formik';
import React from 'react';

interface FormInputProps extends InputProps {
	id: string;
}

export const FormInput = ({ id, ...inputProps }: FormInputProps): InputElement => {
	const context = useFormikContext();

	// @ts-ignore
	const { [id]: error } = context.errors;

	const fieldProps: Partial<InputProps> = {
		status: error && 'danger',
		accessoryRight: error && <Icon name="alert-triangle-outline" />,
	};

	return <Input {...inputProps} {...fieldProps} caption={error} onChangeText={context.handleChange(id)} />;
};
