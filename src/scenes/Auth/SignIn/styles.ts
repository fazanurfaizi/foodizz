import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	appBar: {
		height: 192,
	},
	formContainer: {
		flex: 1,
		paddingVertical: 16,
		paddingHorizontal: 16,
	},
	resetPasswordContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	formControl: {
		marginVertical: 4,
	},
	submitButton: {
		marginVertical: 24,
	},
	noAccountButton: {
		alignSelf: 'center',
	},
});

export default styles;
