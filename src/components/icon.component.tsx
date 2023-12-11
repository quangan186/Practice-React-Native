import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';
import {ImageSource} from '../assets/images/type';

type ImageProps = {
  source: ImageSource;
  style?: StyleProp<ImageStyle>;
};

const Icon = ({source, style}: ImageProps) => {
  return (
    <Image source={source.imageSource} resizeMode="contain" style={style} />
  );
};

export default Icon;
