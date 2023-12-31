import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {default as themes} from '../core/themes/app-themes.json';
import {textFamily} from './text-style';
import {pxToPercentage} from '../core/libs/utils';
type InputProps = {
  label?: string;
  placeholder?: string;
  rightIcon?: any;
  leftIcon?: any;
  maxLength?: number;
  keyboardType?: any;
  secureTextEntry?: boolean;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  returnKeyType?: any;
  onChangeText?: any;
  defaultValue?: any;
  _ref?: React.MutableRefObject<any>;
  textAlign?: any;
  containerStyle?: any;
};

const Input = ({
  label,
  placeholder,
  leftIcon,
  rightIcon,
  maxLength,
  keyboardType,
  inputStyle,
  inputContainerStyle,
  secureTextEntry,
  returnKeyType,
  onChangeText,
  defaultValue,
  _ref,
  textAlign,
  containerStyle,
}: InputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, inputContainerStyle]}>
        {leftIcon && leftIcon}
        <TextInput
          placeholder={placeholder}
          style={[styles.input, inputStyle]}
          maxLength={maxLength}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          onChangeText={onChangeText}
          defaultValue={defaultValue}
          textAlign={textAlign}
          ref={_ref}
          onFocus={() => console.log(_ref?.current)}
        />
        {rightIcon && rightIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: Dimensions.get('window').width,
  },
  label: {
    ...textFamily.notoSansBold,
    color: 'black',
  },
  inputContainer: {
    marginVertical: 16,
    gap: 12,
    backgroundColor: themes['secondary-1'],
    borderRadius: 15,
    flexDirection: 'row',
    // flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
  },
  input: {
    flex: 1,
    height: pxToPercentage(50),
    borderRadius: 15,
    // paddingHorizontal: 20,
    paddingVertical: 4,
    ...textFamily.notoSansRegular,
  },
});
export default Input;
