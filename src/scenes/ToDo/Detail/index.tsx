import { ImageOverlay } from '@components/ImageOverlay';
import { ProgressBar } from '@components/ProgressBar';
import { Toolbar } from '@components/Toolbar';
import { Todo } from '@dto/todo.model';
import { TodoDetailsScreenProps } from '@navigation/todo.navigator';
import { Button, Layout, LayoutElement, Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

export interface TodoDetailRouteParams {
	todo: Todo;
}

export const TodoDetail = (props: TodoDetailsScreenProps): LayoutElement => {
	const { todo } = props.route.params;
	const insets: EdgeInsets = useSafeAreaInsets();

	return (
		<React.Fragment>
			<ImageOverlay
				style={[styles.appBar, { paddingTop: insets.top }]}
				source={require('@assets/images/image-background.jpeg')}>
				<Toolbar appearance="control" onBackPress={props.navigation.goBack} />
			</ImageOverlay>
			<Layout style={styles.container}>
				<View style={styles.detailsContainer}>
					<Text category="h4">{todo.title}</Text>
					<ProgressBar style={styles.progressBar} progress={todo.progress} text={`${todo.progress}%`} />
					<Text>{todo.description}</Text>
				</View>
				<Button onPress={props.navigation.goBack}>COMPLETE</Button>
			</Layout>
		</React.Fragment>
	);
};
