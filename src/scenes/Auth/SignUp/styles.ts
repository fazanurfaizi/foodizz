import theme from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inner: {
		padding: theme.spacing.lg,
		flex: 1,
		justifyContent: 'space-around',
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
		marginVertical: theme.spacing.lg,
	},
	haveAccountButton: {
		alignSelf: 'center',
	},
});

export default styles;
