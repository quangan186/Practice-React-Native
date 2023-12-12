/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../../containers/app/home/home.component';
import MessageAndNotification from '../../../containers/app/message-and-notification/message-and-notification.component';
import Favorites from '../../../containers/app/favorites/favorites.component';
import BookingDetails from '../../../containers/app/booking-detail/booking-detail.component';
import {pxToPercentage} from '../../libs/utils';
import Icon from '../../../components/icon.component';
import {
  bagIcon,
  heartIcon,
  homeIcon,
  mailIcon,
  selectedBagIcon,
  selectedHeartIcon,
  selectedHomeIcon,
  selectedMailIcon,
} from '../../../assets/icons';

import {default as themes} from '../../themes/app-themes.json';
import {View} from 'react-native';
// If you don't have any props you can remove the type Props entirely.
const BottomNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: pxToPercentage(80),
          position: 'absolute',
          bottom: 40,
          right: 20,
          left: 20,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 0,
          backgroundColor: themes['primary-1'],
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                padding: 8,
                borderRadius: 100,
                backgroundColor: focused ? themes['primary-3'] : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 16,
                paddingHorizontal: 12,
              }}>
              <Icon source={focused ? selectedHomeIcon : homeIcon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Message and Notification"
        component={MessageAndNotification}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                padding: 8,
                borderRadius: 100,
                backgroundColor: focused ? themes['primary-3'] : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 16,
                paddingHorizontal: 12,
              }}>
              <Icon source={focused ? selectedMailIcon : mailIcon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                padding: 8,
                borderRadius: 100,
                backgroundColor: focused ? themes['primary-3'] : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 16,
                paddingHorizontal: 12,
              }}>
              <Icon source={focused ? selectedHeartIcon : heartIcon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Booking Detail"
        component={BookingDetails}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                padding: 8,
                borderRadius: 100,
                backgroundColor: focused ? themes['primary-3'] : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 16,
                paddingHorizontal: 12,
              }}>
              <Icon source={focused ? selectedBagIcon : bagIcon} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
