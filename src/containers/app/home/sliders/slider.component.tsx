import {StyleSheet, View} from 'react-native';
import React from 'react';
import SliderCard from './slider-card.component';
import {roomImage1, roomImage2, roomImage3} from '../../../../assets/images';

type Props = {};

const Slider = ({}: Props) => {
  return (
    <View style={styles.container}>
      <SliderCard
        source={roomImage1}
        containerStyle={styles.activeCard}
        isActive
      />
      <SliderCard source={roomImage2} containerStyle={styles.prevCard} />
      <SliderCard source={roomImage3} containerStyle={styles.nextCard} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 22,
  },
  nextCard: {position: 'absolute', right: 0},
  prevCard: {position: 'absolute', left: 0},
  activeCard: {
    zIndex: 1,
    left: '50%',
    marginLeft: -263 / 2,
    top: -20,
  },
});
