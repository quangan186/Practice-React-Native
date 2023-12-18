import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const percentageWidth: number = width / 375; // default: 812 x 375, iPhone 11 Pro

export const pxToPercentage = (value: number): number => {
  return percentageWidth * value;
};

export const isEmpty = (value: any): boolean => {
  return value === undefined || value === '' || value === null;
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
