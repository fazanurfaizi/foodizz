// import { TodoDoneScreenProps } from '@navigation/todo.navigator';
import { Button, Layout, LayoutElement, Text } from '@ui-kitten/components';
import React from 'react';
import styles from './styles';

export const TodoDone = (): LayoutElement => (
	<Layout style={styles.container}>
		<Text category="h4">No done todos yet.</Text>
		<Button style={styles.addButton}>ADD TODO</Button>
	</Layout>
);
