import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Article } from '@models/article'
import styles from './styles'
import theme from '@theme'
import { Button, Card, Modal } from '@ui-kitten/components'
import { Placeholder } from '@components/Placeholder'
import { windowWidth } from '@utils/Dimensions'
import { News } from './News'
import { GenericNavigationProps } from '@navigation/navigation.types'

type Props = {
	articles: Article[],
	query: string,
	navigation: GenericNavigationProps
}

const RecentNews = ({ articles, query, navigation }: Props) => {	
	const [modalVisible, setModalVisible] = useState<boolean>(false)

	const toggleModal = useCallback(() => {
		setModalVisible(!modalVisible)
	}, [modalVisible])
	
	const renderNewsItem = ({ item }) => (
		<News article={item} navigation={navigation} />
	)

	return (
		<View style={styles.recentNewsContainer}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingBottom: 6
				}}
			>
				<Text
					style={{
						fontSize: 22,
						paddingVertical: 10,						
					}}
				>
					Recent News {query && `- ${query[0].toUpperCase() + query.slice(1)}`}
				</Text>
				<TouchableOpacity
					style={[styles.langButton, { borderColor: theme.colors.primary }]}
					onPress={toggleModal}
				>
					<Text style={{color: theme.colors.primary}}>US</Text>
				</TouchableOpacity>
			</View>
			<Modal
				visible={modalVisible}
				backdropStyle={styles.backdrop}
				onBackdropPress={toggleModal}>
				<Card disabled={true}>
					<Text>Welcome to UI Kitten 😻</Text>
					<Button onPress={toggleModal}>
						DISMISS
					</Button>
				</Card>
			</Modal>

			{[1, 2].map((item) => (
				<View style={{ flexDirection: 'row' }} key={item}>
					<Placeholder
						visible={articles ? true : false}
						shimmerStyle={{
							marginBottom: 12,
							borderRadius: 6,
							width: 106,
							height: 151,
						}}
					/>
					<View style={{ paddingVertical: articles ? 0 : 10 }}>
						<Placeholder
							visible={articles ? true : false}
							shimmerStyle={{
								marginBottom: 12,
								marginLeft: 12,
								width: 100,
								height: 16,
							}}
						/>
						<Placeholder							
							visible={articles ? true : false}
							shimmerStyle={{
								marginBottom: 12,
								marginLeft: 12,
								width: windowWidth / 2,
								height: 80,
							}}
						/>
					</View>
				</View>
			))}

			<FlatList
				style={{ width: '100%', height: '100%' }}
				initialNumToRender={7}
				data={articles}
				keyExtractor={(item) => item.url}
				showsVerticalScrollIndicator={false}
				renderItem={renderNewsItem}
				ItemSeparatorComponent={() => <View style={{ marginBottom: 12 }} />}
			/>
		</View>
	)
}

export default RecentNews
