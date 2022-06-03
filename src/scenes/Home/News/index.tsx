import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { NewsCategoryBar } from '@components/TabBar/NewsCategoryBar'
import { Divider, Icon, Layout } from '@ui-kitten/components'
import styles from './styles'
import { SafeAreaLayout, SaveAreaInset } from '@components/SafeAreaLayout'
import { Toolbar } from '@components/Toolbar'
import { ProfileScreenProps } from '@navigation/profile.navigator'
import { Search } from '@components/Search'
import { useNavigation } from '@react-navigation/core'
import { GenericNavigationProps } from '@navigation/navigation.types'
import { Article } from '@models/article'
import RecentNews from '@components/News/RecentNews'
import { getCategoryNews, getSearchNews, getTopHeadlines } from '@utils/newsApi'
import Header from '@components/Header'
import GenericHeader from '@components/GenericHeader'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NotificationBadge } from '@components/Notifications/Badge'
import TrendNews from '@components/News/TrendNews'
import { NotificationsIcon } from '@components/Icon'

export const News = () => {

	const navigation = useNavigation<GenericNavigationProps>();
	const [selectedTab, setSelectedTab] = useState<string>('general')
	const [query, setQuery] = useState<string>('')
	const [isSubmit, setIsSubmit] = useState<boolean>(false)
	const [articles, setArticles] = useState<Article[]|[]>([])
	const [trendNews, setTrendNews] = useState<Article[]|[]>([])
	const mounted = useRef(true);

	useEffect(() => {
		if(mounted) {
			if(isSubmit) {
				getSearchNews(query)
					.then((data) => setArticles(data.articles))
					.catch((error) => console.log(error))
			} else {
				getTopHeadlines()
					.then((data) => setArticles(data.articles))
					.catch((error) => console.log(error))
			}
		}

		return () => {
			mounted.current = false
		}
	}, [query, isSubmit])

	useEffect(() => {
		if(mounted) {
			if(selectedTab === 'general') {
				getTopHeadlines()
					.then((data) => setTrendNews(data.articles))
					.catch((error) => console.log(error))
			} else {
				getCategoryNews(selectedTab)
					.then((data) => setTrendNews(data.articles))
					.catch((error) => console.log(error))
			}
		}
		
		return () => {
			mounted.current = false
		}
	}, [selectedTab])
	

	return (
		<SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
			{/* <Toolbar title="React Navigation Ex 🐱" backIcon={MenuIcon} onBackPress={props.navigation.toggleDrawer} /> */}
			{/* <Divider /> */}
			<GenericHeader
				title='News'
				RightAction={(
					<TouchableOpacity style={styles.backButtonContainer}>
						<NotificationBadge
							mainElement={
								<NotificationsIcon style={styles.backButtonIcon} />
							}
							badgeElement={
								<Text style={{color:'#FFFFFF'}}>3</Text>
							}
							iconBadgeStyle={{
								width: 20,
								height: 20,
								backgroundColor: '#999999'
							}}
						/>						
					</TouchableOpacity>
				)}
			/>
			<Layout style={styles.container}>				

				<Search
					query={query}
					setQuery={setQuery}
					setIsSubmit={setIsSubmit}
				/>

				<NewsCategoryBar
					selected={selectedTab}
					onPress={(id) => setSelectedTab(id)}
				/>

				{/* Trend News */}
				{selectedTab && (
					<TrendNews
						articles={trendNews}
						navigation={navigation}						
					/>
				)}

				<RecentNews
					articles={articles}
					navigation={navigation}
					query={query}
				/>
			</Layout>			
		</SafeAreaLayout>		
	)
}
