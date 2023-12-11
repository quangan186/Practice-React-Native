import React from 'react';
import AppNavigator from './src/core/navigation/routes';
import {Provider} from 'react-redux';
import {store} from './src/core/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
