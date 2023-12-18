import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ScreenHeader from '../../../components/header.component';
import {default as themes} from '../../../core/themes/app-themes.json';
import TabBar from '../../../components/tab-bar.component';
import {messageAndNotificationTabBarCategory} from '../../../core/libs/constants';
import {searchIcon} from '../../../assets/icons';
import Icon from '../../../components/icon.component';
import Input from '../../../components/input.component';
import NotificationCard from '../../../components/notification-card.component';
import {
  roomBookingImage1,
  roomBookingImage2,
  roomBookingImage3,
} from '../../../assets/images';

type Props = {};

const MessageAndNotification = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ScreenHeader title="Message" backBtn settingBtn />
      </View>
      <View style={styles.mainContainer}>
        <TabBar
          categories={messageAndNotificationTabBarCategory}
          containerStyle={styles.tabBarContainer}
        />
        <View style={styles.searchBarContainer}>
          <Input
            placeholder="Looking for room"
            rightIcon={
              <TouchableOpacity>
                <Icon source={searchIcon} />
              </TouchableOpacity>
            }
            containerStyle={styles.searchContainerStyle}
            inputContainerStyle={styles.searchInputContainer}
            inputStyle={styles.searchInput}
          />
        </View>

        <ScrollView style={styles.notificationContainer}>
          <NotificationCard
            source={roomBookingImage1}
            title="Karen Smith"
            description="Did you come in time..."
          />
          <NotificationCard
            source={roomBookingImage2}
            title="Hilary"
            description="I would like to prepar..."
          />
          <NotificationCard
            source={roomBookingImage3}
            title="Karen Smith"
            description="Thanks for using our ..."
          />

          <NotificationCard
            source={roomBookingImage1}
            title="Karen Smith"
            description="Did you come in time..."
          />
          <NotificationCard
            source={roomBookingImage2}
            title="Hilary"
            description="I would like to prepar..."
          />
          <NotificationCard
            source={roomBookingImage3}
            title="Karen Smith"
            description="Thanks for using our ..."
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default MessageAndNotification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes['primary-1'],
  },
  headerContainer: {
    backgroundColor: 'white',
  },
  mainContainer: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    height: Dimensions.get('screen').height,
    paddingBottom: 280,
  },
  searchBarContainer: {
    marginHorizontal: 30,
  },
  notificationContainer: {
    marginVertical: 20,
  },

  tabBarContainer: {
    marginBottom: 20,
  },
  searchContainerStyle: {
    // flex: 1,
  },
  searchInputContainer: {
    marginVertical: 0,
    // paddingHorizontal: 10
    // flex: 1,
  },
  searchInput: {
    paddingVertical: 0,
  },
});
