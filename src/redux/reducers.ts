import AsyncStorage from '@react-native-async-storage/async-storage';
import { allFilmsReducer } from '@redux/ghibli/reducers';
import { authReducer } from '@redux/auth/reducers';
import { persistCombineReducers } from 'redux-persist';

const reducers = {
	films: allFilmsReducer,
	auth: authReducer
};

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	// There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
	timeout: undefined,
	whitelist: ['onBoard'],
};

// Setup Reducers
export const persistedRootReducer = persistCombineReducers(persistConfig, reducers);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;
