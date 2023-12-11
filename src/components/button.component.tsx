import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {textFamily} from './text-style';
import {default as themes} from '../core/themes/app-themes.json';
import {pxToPercentage} from '../core/libs/utils';
type ButtonProps = {
  children: string;
  btnStyle?: StyleProp<ViewStyle>;
  btnTextStyle?: StyleProp<TextStyle>;
};

const Button = ({children, btnStyle, btnTextStyle}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.btn, btnStyle]}>
      <Text style={[styles.btnText, btnTextStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 60,
    height: pxToPercentage(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: themes['primary-2'],
    alignSelf: 'baseline',
  },
  btnText: {
    ...textFamily.notoSansSemiBold,
    fontSize: 14,
    color: 'white',
  },
});
export default Button;
