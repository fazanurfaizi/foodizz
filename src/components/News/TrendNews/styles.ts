import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	trendNewsContainer: {
		flex: 1,
		marginBottom: 12,
	},
	trendNews: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	trendNewsTitle: {
		position: 'absolute',
		color: 'white',
		paddingHorizontal: 12,
		fontWeight: 'bold',
		fontSize: 16,
		bottom: 45,
		height: 70,
	},
	trendNewsTime: {
		position: 'absolute',
		color: 'white',
		paddingHorizontal: 12,
		fontSize: 12,
		fontWeight: 'bold',
		bottom: 15,
	},
	source: {
		fontSize: 12,
		paddingHorizontal: 12,
		fontWeight: 'bold',
		position: 'absolute',
		bottom: 15,
		right: 0,
		borderTopLeftRadius: 3,
		borderBottomLeftRadius: 3,
	},
});

export default styles
