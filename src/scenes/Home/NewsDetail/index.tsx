import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import styles from './styles'
import { Article } from '@models/article'
import { RouteProp, useNavigation } from '@react-navigation/core'
import { NewsNavigatorParams } from '@navigation/news.navigator'
import { AppRoute } from '@navigation/app.routes'
import { Icon } from '@ui-kitten/components'
import { BookmarkIcon, ChatBubbleIcon, NotificationsIcon, ShareIcon } from '@components/Icon'
import theme from '@theme'
import GenericHeader from '@components/GenericHeader'
import { NotificationBadge } from '@components/Notifications/Badge'
import { SafeAreaLayout, SaveAreaInset } from '@components/SafeAreaLayout'
import { GenericNavigationProps } from '@navigation/navigation.types'

type Props = {
	route: RouteProp<NewsNavigatorParams, AppRoute.NEWS_DETAIL>;
}

export const NewsDetail = ({ route }: Props) => {

	const navigation = useNavigation<GenericNavigationProps>();

	const article: Article = route.params.article

	const [isBookmarked, setIsBookmarked] = useState<boolean>(false)
	const [addTodoVisible, setAddTodoVisible] = useState<boolean>(false);
  	const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);

	const handleBookMark = useCallback(() => {
		setIsBookmarked(!isBookmarked)
	}, [isBookmarked])
	

	return (
		<SafeAreaLayout style={{flex: 1}} insets={SaveAreaInset.TOP}>
			<GenericHeader
				title='News'
				onBackClicked={() => navigation.goBack()}
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
			<View
				style={styles.buttonsContainer}
			>				
				<TouchableOpacity
					style={styles.otherButtons}
					// onPress={toggleBottomSheet}
				>					
					<ChatBubbleIcon 
						style={{
							color: theme.colors.primary,
							marginRight: 8,
							fontSize: 24,							
						}}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.otherButtons}
					onPress={handleBookMark}
				>
					<BookmarkIcon		
						style={{
							color: isBookmarked ? theme.colors.primary : 'red',
							marginRight: 8,
							fontSize: 24,	
						}}						
					/>
				</TouchableOpacity>

				<TouchableOpacity style={styles.otherButtons}>
					<ShareIcon 
						style={{
							color: theme.colors.primary,
							marginRight: 8,
							fontSize: 24,							
						}}
					/>
				</TouchableOpacity>
			</View>
			<Text style={{padding: 8}}>
				{article.url}
			</Text>
		</SafeAreaLayout>
  	)
}

