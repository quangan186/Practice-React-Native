/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from '../../../../components/icon.component';
import {filterIcon, locationIcon, searchIcon} from '../../../../assets/icons';
import Input from '../../../../components/input.component';
import {default as themes} from '../../../../core/themes/app-themes.json';
import {avatarImage} from '../../../../assets/images';
import {pxToPercentage} from '../../../../core/libs/utils';
type Props = {
  user: any;
};

const Header = ({user}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.userInfo}>
          <Text style={styles.intro}>
            Hi {user.username || 'Josh'}, you are at
          </Text>
          <View style={styles.location}>
            <Icon source={locationIcon} />
            <Text style={styles.locationTitle}>Ho Chi Minh City, Vietnam</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 100,
          }}>
          <Icon
            source={avatarImage}
            style={{
              width: pxToPercentage(40),
              height: pxToPercentage(40),
              borderRadius: 100,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <Input
          placeholder="Looking for room"
          rightIcon={
            <TouchableOpacity>
              <Icon source={searchIcon} />
            </TouchableOpacity>
          }
          inputContainerStyle={styles.searchInputContainer}
          inputStyle={styles.searchInput}
        />
        {/* <View> */}
        <TouchableOpacity>
          <Icon source={filterIcon} />
        </TouchableOpacity>
        {/* </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: themes['primary-1'],
    backgroundColor: themes['primary-1'],
    borderBottomLeftRadius: 50,
    paddingHorizontal: 30,
    paddingBottom: 40,
    // paddingTop: 60,
    gap: 20,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    gap: 12,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchInputContainer: {
    marginVertical: 0,
  },
  searchInput: {
    paddingVertical: 0,
  },
  intro: {
    fontSize: 14,
    color: 'white',
  },
  locationTitle: {
    fontSize: 18,
    color: 'white',
  },
});
export default Header;
