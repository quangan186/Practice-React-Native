import React from 'react';
import {ImageBackground, ImageStyle, StyleProp} from 'react-native';
import {ImageSource} from '../assets/images/type';

type Props = {
  children?: any;
  source: ImageSource;
  style?: StyleProp<ImageStyle>;
};

const BackgroundImage = ({children, source, style}: Props) => {
  return (
    <ImageBackground
      source={source.imageSource}
      style={style}
      resizeMode="contain">
      {children}
    </ImageBackground>
  );
};

export default BackgroundImage;
