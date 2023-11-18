import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';
import {applyMiddleware, legacy_createStore} from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persisedReducer = persistReducer(persistConfig, rootReducer);
export let store = legacy_createStore(persisedReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);
