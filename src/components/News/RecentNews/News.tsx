import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Article } from '@models/article'
import { AppRoute } from '@navigation/app.routes'
import { dateFormat } from '@utils/dateFormat'
import { GenericNavigationProps } from '@navigation/navigation.types'
import { Text } from '@ui-kitten/components'
import { ShareIcon } from '@components/Icon'

type Props = {
	article: Article,
	navigation: GenericNavigationProps
}

export const News = ({ article, navigation }: Props) => {		
	return (
		<TouchableOpacity
			style={[styles.recentNewsButton]}
			onPress={() => navigation.navigate(AppRoute.NEWS_DETAIL, { article: article })}
		>
			<Image
				source={{
					uri:
					article.urlToImage !== '' && article.urlToImage !== null
						? article.urlToImage
						: 'https://images.unsplash.com/photo-1592312040171-267aa90d4783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1376&q=80',
				}}
				style={styles.image}
				resizeMode="cover"
			/>			
			<View
				style={{
					padding: 12,
				}}
			>
				<View style={styles.recentNewsBody}>
					<Text style={[styles.title]}>
						{article.title}
					</Text>				
				</View>
			</View>
			<Text
				style={styles.source}
			>
				{article.source.name} - {dateFormat(article.publishedAt)}
			</Text>
			<TouchableOpacity
				style={{
					position: 'absolute',
					bottom: 5,
					right: 45,
				}}			
			>
				<ShareIcon />
			</TouchableOpacity>
		</TouchableOpacity>
	)
}
