import { View, FlatList } from 'react-native'
import React from 'react'
import { Article } from '@models/article'
import { GenericNavigationProps } from '@navigation/navigation.types'
import styles from './styles'
import { Placeholder } from '@components/Placeholder'
import { windowHeight, windowWidth } from '@utils/Dimensions'
import { News } from './News'

type Props = {
	articles: Article[],	
	navigation: GenericNavigationProps
}

const TrendNews = ({ articles, navigation }: Props) => {
	return (
		<View style={styles.trendNewsContainer}>
			<View style={{ flexDirection: 'row' }}>
				<Placeholder
					visible={articles ? true : false}
					shimmerStyle={{
						borderRadius: 6,
						width: windowWidth / 1.5,
						height: windowHeight / 3,
					}}
				/>
				<Placeholder					
					visible={articles ? true : false}
					shimmerStyle={{
						borderRadius: 6,
						marginLeft: 12,
						width: windowWidth / 1.5,
						height: windowHeight / 3,
					}}
				/>
			</View>

			<FlatList
				decelerationRate={0}
				snapToInterval={windowWidth / 1.5 + 12}
				snapToAlignment={'center'}
				style={{ width: '100%', height: '100%' }}
				data={articles}
				keyExtractor={(item) => item.url.toString()}
				initialNumToRender={7}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={{ marginRight: 12 }} />}
				renderItem={({ item }) => (<News article={item} navigation={navigation} />)}
			/>
		</View>
	)
}

export default TrendNews
