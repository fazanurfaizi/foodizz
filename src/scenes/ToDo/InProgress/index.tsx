import { SearchIcon } from '@components/Icon';
import { ProgressBar } from '@components/ProgressBar';
import { Todo } from '@dto/todo.model';
import { AppRoute } from '@navigation/app.routes';
import { TodoInProgressScreenProps } from '@navigation/todo.navigator';
import {
	Input,
	Layout,
	List,
	ListElement,
	ListItem,
	ListItemElement,
	Text,
	useStyleSheet,
} from '@ui-kitten/components';
import React, { useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import styles from './styles';

const allTodos: Todo[] = [
	Todo.mocked0(),
	Todo.mocked1(),
	Todo.mocked2(),
	Todo.mocked0(),
	Todo.mocked1(),
	Todo.mocked2(),
	Todo.mocked0(),
	Todo.mocked1(),
	Todo.mocked2(),
];

export const TodoInProgress = (props: TodoInProgressScreenProps): ListElement => {
	const [todos, setTodos] = useState<Todo[]>(allTodos);
	const [query, setQuery] = useState<string>('');
	const themeStyles = useStyleSheet(styles);

	const onChangeQuery = (search: string): void => {
		const nextTodos: Todo[] = allTodos.filter((todo: Todo): boolean => {
			return todo.title.toLowerCase().includes(search.toLowerCase());
		});

		setTodos(nextTodos);
		setQuery(search);
	};

	const navigateTodoDetails = (todoIndex: number): void => {
		const { [todoIndex]: todo } = todos;
		props.navigation.navigate(AppRoute.TODO_DETAILS, { todo });
	};

	const renderTodo = ({ item, index }: ListRenderItemInfo<Todo>): ListItemElement => (
		<ListItem style={themeStyles.item} onPress={() => navigateTodoDetails(index)}>
			<Text category="s1">{item.title}</Text>
			<Text appearance="hint" category="c1">
				{item.description}
			</Text>
			<ProgressBar style={themeStyles.itemProgressBar} progress={item.progress} text={`${item.progress}%`} />
		</ListItem>
	);

	return (
		<Layout style={themeStyles.container}>
			<Input
				style={themeStyles.filterInput}
				placeholder="Search"
				value={query}
				accessoryRight={SearchIcon}
				onChangeText={onChangeQuery}
			/>
			<List style={themeStyles.list} data={todos} renderItem={renderTodo} />
		</Layout>
	);
};
