import GenericModal from '@components/Modals/GenericModal';
import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ModalPage: FC = () => {
	return (
		<GenericModal pageTitle='Modal Page'>
			<View>
				<Text style={styles.mainText}>Show Modal</Text>
			</View>
		</GenericModal>
	);
};

export default ModalPage;
