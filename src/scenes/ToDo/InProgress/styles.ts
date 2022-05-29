import { StyleService } from '@ui-kitten/components';

const styles = StyleService.create({
	container: {
		flex: 1,
	},
	filterInput: {
		marginTop: 16,
		marginHorizontal: 8,
	},
	list: {
		flex: 1,
		backgroundColor: 'background-basic-color-1',
	},
	item: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		paddingHorizontal: 12,
	},
	itemProgressBar: {
		width: '50%',
		marginVertical: 12,
	},
});

export default styles;
