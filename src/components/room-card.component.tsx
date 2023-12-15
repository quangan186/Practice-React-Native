/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from './icon.component';
import {bathroomIcon, bedroomIcon, starIcon} from '../assets/icons';
import {RoomProps} from '../core/libs/constants';
import {default as themes} from '../core/themes/app-themes.json';
import {textFamily} from './text-style';
type RoomCardProps = RoomProps & {
  flexRow?: boolean;
  containerStyle?: any;
};
const RoomCard = ({
  image,
  title,
  price,
  location,
  distance,
  numberOfBedroom,
  numberOfBathroom,
  rating,
  flexRow = false,
  containerStyle,
}: RoomCardProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {flexDirection: flexRow ? 'row' : 'column'},
        containerStyle,
      ]}>
      <Icon source={image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.informationContainer}>
          <Text style={styles.price}>${price.toFixed(2)}/1 hour</Text>
          <Text style={{color: 'black'}}>{location || `${distance} km`}</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Icon source={bedroomIcon} />
            <Text style={{color: 'black'}}>{numberOfBedroom}</Text>
          </View>
          <View style={styles.stat}>
            <Icon source={bathroomIcon} />
            <Text style={{color: 'black'}}>{numberOfBathroom}</Text>
          </View>
          <View style={styles.stat}>
            <Icon source={starIcon} />
            <Text style={{color: 'black'}}>{rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: themes['secondary-1'],
    borderRadius: 20,
    gap: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 16,
  },
  title: {
    ...textFamily.PTSerifBold,
    fontSize: 16,
    fontWeight: '700',
    color: themes['primary-1'],
  },
  informationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    color: 'black',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
