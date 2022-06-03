import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',		
		marginBottom: 4,
	},
	left: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	leftText: {
		marginLeft: 6,
		fontWeight: 'bold',
		letterSpacing: 1.2,
	},
	right: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	input: {		
		width: '100%',
		height: 32,
		borderRadius: 3,		
		paddingVertical: 0,
		marginRight: 6,
	},
});

export default styles
