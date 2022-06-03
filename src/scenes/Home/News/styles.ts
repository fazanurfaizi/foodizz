import theme from '@theme';
import { StyleService } from '@ui-kitten/components';

const styles = StyleService.create({
	safeArea: {
		flex: 1,
	},
	container: {
		flex: 1,
		paddingHorizontal: 20
	},
	filterInput: {
		marginTop: 12,
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

export default styles;
