import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { windowHeight, windowWidth } from '@utils/Dimensions'
import { Article } from '@models/article'
import { GenericNavigationProps } from '@navigation/navigation.types'
import { dateFormat } from '@utils/dateFormat'
import { AppRoute } from '@navigation/app.routes'
import { ShareIcon } from '@components/Icon'

type Props = {
	article: Article,
	navigation: GenericNavigationProps
}

export const News = ({ article, navigation }: Props) => {
	return (
		<View style={styles.trendNews}>
            <TouchableOpacity
				style={{
					height: windowHeight / 3,
					width: windowWidth / 1.5,
				}}
				onPress={() =>
					navigation.navigate(AppRoute.NEWS_DETAIL, {
						article: article,
					})
				}
            >
				<Image
					source={{
						uri:
							article.urlToImage !== '' && article.urlToImage !== null
								? article.urlToImage
								: 'https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
					}}
					style={{ width: '100%', height: '100%', borderRadius: 6 }}
					resizeMode="cover"
				/>
				<Text
					style={[
						styles.source
					]}
				>
					{article.source.name}
				</Text>
				<Text style={styles.trendNewsTitle}>
					{article.title.slice(0, 60) + (article.title.length > 60 ? '...' : '')}
				</Text>
				<Text style={styles.trendNewsTime}>
					{dateFormat(article.publishedAt)}
				</Text>
				<TouchableOpacity
					style={{
						position: 'absolute',
						top: 20,
						right: 5,
					}}					
				>
					<ShareIcon style={{color: 'white'}} />
				</TouchableOpacity>
			</TouchableOpacity>
		</View>
	)
}
