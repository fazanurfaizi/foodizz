import { windowWidth } from "@utils/Dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	recentNewsContainer: {
		flex: 1,
		marginBottom: 12,
	},
	recentNewsButton: {
		width: windowWidth,
		height: windowWidth / 2.7,
		borderRadius: 6,
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	recentNewsBody: {		
		width: windowWidth - (150),
		height: '100%',
	},
	langButton: {
		marginLeft: 'auto',
		borderWidth: 0.5,
		width: 50,
		height: 20,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},	
	image: { 
		width: windowWidth / 2 - 100, 
		height: '99%',
		borderRadius: 6 
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
		width: '100%',
	},
	description: {
		fontSize: 14,
		fontWeight: 'normal',
		width: '100%',
		height: windowWidth / 5.4,
	},
	source: {
		position: 'absolute',
		bottom: 4,
		left: (windowWidth - (151 + 20)) / 2,
		fontSize: 12,
		fontWeight: 'bold',				
	},
	backdrop: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
});

export default styles
