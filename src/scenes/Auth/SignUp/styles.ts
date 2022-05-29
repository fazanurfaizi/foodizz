import theme from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: theme.spacing.md
	},
	appBar: {
		height: 192,
	},
	logo: {
        width: 120,
        height: 120,
        marginTop: 20,
        marginBottom: 10,
        resizeMode: 'contain'
    },
	formContainer: {
		flex: 1,
		paddingVertical: 16,
		paddingHorizontal: 16,
	},
	formControl: {
		marginVertical: 6,
	},
	submitButton: {
		marginVertical: 24,
	},
	haveAccountButton: {
		alignSelf: 'center',
	},
});

export default styles;
