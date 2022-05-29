import { StyleService } from '@ui-kitten/components';

const themedStyle = StyleService.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	progressContainer: {
		height: 6,
		borderRadius: 3,
		backgroundColor: 'background-basic-color-2',
		overflow: 'hidden',
	},
	progress: {
		flex: 1,
		backgroundColor: 'color-primary-default',
	},
	text: {
		marginHorizontal: 16,
	},
});

export default themedStyle;
