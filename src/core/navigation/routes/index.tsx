/* eslint-disable @typescript-eslint/no-unused-vars */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './auth';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomNavigator from '../components/bottom-navigation.component';
import {useAppSelector} from '../../hooks/redux.hook';

type Props = {};

const AppNavigator = (props: Props) => {
  const {session} = useAppSelector(state => state.login);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!session.isLoggedin || !session.user ? (
          <AuthNavigator />
        ) : (
          <BottomNavigator />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
