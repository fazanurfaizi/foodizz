import Splashscreen from '@components/Splashscreen';
import * as eva from '@eva-design/eva';
import '@i18n';
import { AppNavigator } from '@navigation/app.navigator';
import { AppRoute } from '@navigation/types';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from '@redux/store';
import theme, { globalStyle } from '@theme';
import { palette } from '@theme/colors';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { IoniconsIconsPack } from '@components/IconsAdapter/ionicons-icons';
import React, { FC, Suspense } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

enableScreens();

const App: FC = () => {
	const isAuthorized = false;

	return (
		<Suspense fallback={<Splashscreen />}>
			<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
				<IconRegistry icons={[EvaIconsPack, IoniconsIconsPack]} />
				<Provider store={store}>
					<PersistGate loading={<Splashscreen />} persistor={persistor}>
						<SafeAreaProvider>
							<NavigationContainer>
								<StatusBar barStyle="dark-content" backgroundColor={palette.WHITE} />

								<Layout style={[globalStyle.flex1, globalStyle.justifyCenter]}>
									<AppNavigator initialRouteName={isAuthorized ? AppRoute.HOME : AppRoute.AUTH} />
								</Layout>
							</NavigationContainer>
						</SafeAreaProvider>
					</PersistGate>
				</Provider>
			</ApplicationProvider>
		</Suspense>
	);
};

export default App;
