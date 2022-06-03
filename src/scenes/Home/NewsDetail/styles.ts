import theme from "@theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	buttonsContainer: {
		width: '100%',
		flexDirection: 'row',
		paddingBottom: 12,
	},
	allComments: {
		height: 48,
		width: '60%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3,
		borderWidth: 0.1,
		marginLeft: 6,
	},
	otherButtons: {		
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',		
	},
	backButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	backButtonStyle: {
	  color: theme.colors.backButtonText,	  
	  fontSize: 18,
	},
	backButtonIcon: {
		color: theme.colors.primary,
		marginRight: 8,
		fontSize: 24,
	},
});

export default styles
