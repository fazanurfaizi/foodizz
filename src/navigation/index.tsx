import React, { FC } from 'react';
import { AppNavigator } from '@navigation/app.navigator';
import { AppRoute } from '@navigation/types';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '@redux/auth/selector';

export const Navigation: FC = () => {
	const auth = useSelector(isAuthenticated)	
	
	return (
		<AppNavigator initialRouteName={auth ? AppRoute.HOME : AppRoute.AUTH} />
	)
}
