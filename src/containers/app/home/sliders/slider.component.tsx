import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SliderCard from './slider-card.component';
import {roomImage1, roomImage2, roomImage3} from '../../../../assets/images';

type Props = {};

const Slider = ({}: Props) => {
  return (
    <View style={{position: 'relative'}}>
      <SliderCard
        source={roomImage1}
        containerStyle={{position: 'absolute', zIndex: 1, left: '50%', marginLeft: -263 / 2,}}
      />
      <SliderCard
        source={roomImage2}
        containerStyle={{position: 'absolute', left: 0}}
      />
      <SliderCard
        source={roomImage3}
        containerStyle={{position: 'absolute', right: 0}}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});
