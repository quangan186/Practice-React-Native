/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {default as themes} from '../../../core/themes/app-themes.json';
import TabBar from '../../../components/tab-bar.component';
import {
  homeTabBarCategory,
  nearRooms,
  recommendRooms,
  roomCategories,
} from '../../../core/libs/constants';
import Slider from './sliders/slider.component';
import ScrollHorizontalBar from './scroll-horizontal/scroll-horizontal-bar.component';

import Icon from '../../../components/icon.component';
import {textFamily} from '../../../components/text-style';
import RoomCard from '../../../components/room-card.component';
import {useAppSelector} from '../../../core/hooks/redux.hook';
import HomeHeader from './header/home-header.component';

type Props = {};

const Home = ({}: Props) => {
  const {session} = useAppSelector(state => state.login);
  const [currentRoomCategory, setCurrentRoomCategory] = useState<string>(
    roomCategories[0]?.type!,
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <HomeHeader user={session.user} />
      </View>
      <View style={styles.mainContainer}>
        <TabBar categories={homeTabBarCategory} />

        <Slider />

        <View style={styles.categoryTabContainer}>
          <Text style={styles.titleSection}>Picked for you</Text>
          <ScrollHorizontalBar scrollBarStyle={styles.scrollContainer}>
            {roomCategories.map((category, index) => {
              return (
                <TouchableOpacity
                  key={category.type}
                  style={[
                    styles.categoryTab,
                    {
                      marginHorizontal: index % 2 !== 0 ? 12 : 0,
                      backgroundColor:
                        currentRoomCategory === category.type
                          ? themes['secondary-5']
                          : themes['secondary-4'],
                    },
                  ]}
                  onPress={() => setCurrentRoomCategory(category.type)}>
                  <Icon source={category.image} />
                  <Text
                    style={[
                      styles.categoryTabText,
                      category.type === currentRoomCategory
                        ? styles.activeCategoryTabText
                        : styles.inActiveCategoryTabText,
                    ]}>
                    {category.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollHorizontalBar>

          <ScrollHorizontalBar scrollBarStyle={styles.scrollContainer}>
            {recommendRooms.map((room, index) => {
              return (
                <RoomCard
                  image={room.image}
                  title={room.title}
                  price={room.price}
                  location={room.location}
                  numberOfBedroom={room.numberOfBedroom}
                  numberOfBathroom={room.numberOfBathroom}
                  rating={room.rating}
                  containerStyle={
                    recommendRooms.length <= 2
                      ? index === 1 && {marginLeft: 20}
                      : index % 2 !== 0 && {marginVertical: 20}
                  }
                />
              );
            })}
          </ScrollHorizontalBar>
        </View>

        <View style={styles.nearRoomContainer}>
          <Text style={styles.titleSection}>Near to you</Text>
          {nearRooms.map(room => {
            return (
              <RoomCard
                image={room.image}
                title={room.title}
                price={room.price}
                distance={room.distance}
                numberOfBedroom={room.numberOfBedroom}
                numberOfBathroom={room.numberOfBathroom}
                rating={room.rating}
                flexRow={true}
              />
            );
          })}
        </View>
      </View>
      <StatusBar backgroundColor={themes['primary-1']} />
    </ScrollView>
  );
};

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
    paddingBottom: 120,
  },
  categoryTabContainer: {
    marginHorizontal: 30,
    gap: 24,
  },
  scrollContainer: {
    marginHorizontal: 0,
  },
  categoryTab: {
    flexDirection: 'row',
    gap: 8,
    padding: 8,
    alignItems: 'center',
    alignSelf: 'stretch',
    width: 145,
    borderRadius: 20,
  },
  categoryTabText: {
    ...textFamily.PTSerifBold,
    flexShrink: 1,
    fontSize: 12,
  },
  activeCategoryTabText: {
    color: themes['primary-2'],
    fontWeight: '700',
  },
  inActiveCategoryTabText: {
    color: themes['secondary-6'],
    fontWeight: '300',
  },
  titleSection: {
    ...textFamily.PTSerifRegular,
    color: themes['primary-1'],
    fontSize: 16,
  },
  nearRoomContainer: {
    marginHorizontal: 30,
    gap: 24,
    marginVertical: 20,
  },
});
export default Home;
