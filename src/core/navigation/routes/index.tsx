/* eslint-disable @typescript-eslint/no-unused-vars */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './auth';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type Props = {};

const AppNavigator = (props: Props) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
