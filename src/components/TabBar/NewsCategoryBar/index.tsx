import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styles from './styles';
import theme from '@theme';

type Props = {
	selected: string;
	onPress: (item: string) => void
}

type Category = {
	id: string;
	title: string;
}

export const NewsCategoryBar = ({ selected, onPress }: Props) => {

	const listRef = useRef<FlatList>(null)

	const tabs: Category[] = [
		{
			id: 'general',
			title: 'General'
		},
		{
			id: 'business',
			title: 'Business'
		},
		{
			id: 'health',
			title: 'Health'
		},
		{
			id: 'entertainment',
			title: 'Entertainment'
		},
		{
			id: 'sports',
			title: 'Sports'
		},
		{
			id: 'technology',
			title: 'Technology'
		},
	];

	useEffect(() => {
		listRef.current?.scrollToIndex({
			index: tabs.findIndex((el) => el.id === selected)
		});		
	}, [selected, tabs])
	

	return (
		<View style={styles.categoryContainer}>
			<FlatList
				ref={listRef}
				style={styles.categoryFlatList}
				data={tabs}
				keyExtractor={(item) => item.id}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<View style={styles.category}>
						<TouchableOpacity
							style={styles.categoryButton}
							onPress={() => {
								onPress(item.id)
								listRef.current?.scrollToIndex({
									index: tabs.findIndex((el) => el === item)
								})
							}}
						>
							<Text style={styles.categoryTitle}>
								{item.title}
							</Text>
						</TouchableOpacity>
						{selected === item.id && (
							<View
								style={[
									styles.borderBottom,
									{ backgroundColor: theme.colors.primary }
								]}
							/>
						)}
					</View>
				)}
			/>
		</View>
	)
}
