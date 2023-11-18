import React from 'react'
import SwitchStack from './src/navigation/SwitchStack';
import { persistor, store } from './src/store/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store = {store}>
      <PersistGate persistor={persistor} loading={null}>
      <SwitchStack />
    </PersistGate>
    </Provider>
  )
}

export default App