/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './auth';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import BottomNavigator from '../components/bottom-navigation.component';
import {useAppSelector} from '../../hooks/redux.hook';
import {default as themes} from '../../themes/app-themes.json';
type Props = {};

const AppNavigator = (props: Props) => {
  const {session} = useAppSelector(state => state.login);
  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={['top']}
        style={{flex: 1, backgroundColor: themes['primary-1']}}>
        <NavigationContainer>
          {/* {!session.isLoggedin || !session.user ? (
            <AuthNavigator />
          ) : ( */}
          <BottomNavigator />
          {/* )} */}
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
