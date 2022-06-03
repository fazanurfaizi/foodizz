import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "@utils/Dimensions";

const styles = StyleSheet.create({
	inputFrame: {
		width: windowWidth / 1.1,
		height: windowHeight / 15,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		padding: 10,
		marginTop: 5,
		marginBottom: 10,
		width: '100%',
		height: '100%',
		fontSize: 16,
		borderRadius: 6,
		borderWidth: 0.5,
		borderColor: '#b1b1b1',
	},
});

export default styles
