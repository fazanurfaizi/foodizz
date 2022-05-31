import GenericHeader from '@components/GenericHeader';
import NHCSafeAreaView from '@components/NHCSafeAreaView';
import { GenericNavigationProps } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from '@ui-kitten/components';
import React, { FC, memo } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles';

const Home: FC = () => {	
	const navigation = useNavigation<GenericNavigationProps>();	

	return (
		<NHCSafeAreaView>
			<GenericHeader BodyHeader={<Icon pack="FontAwesome5" name="react" style={styles.headerIconContent} />} />

			<ScrollView style={styles.container} contentContainerStyle={styles.content}>
				<Text style={styles.mainText}>Welcome</Text>								

				<View style={styles.buttonGoToContainer}>
					<Button
						onPress={() => navigation.navigate('Main', { screen: 'OtherPage' })}
						style={styles.navigationButton}
						children={() => (
							<>
								<Icon pack="EvilIcons" name="arrow-right" style={styles.iconContent} />
								<Text style={styles.buttonText}>Another page</Text>
							</>
						)}
					/>

					<Button
						style={styles.navigationButtonBordered}
						onPress={() => navigation.navigate('MyModal')}
						children={() => (
							<Text style={styles.navigationButtonBorderedText}>Modal</Text>
						)}
					/>
				</View>				
			</ScrollView>
		</NHCSafeAreaView>
	);
};

export default memo(Home);
