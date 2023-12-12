import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import Icon from '../../../components/icon.component';
import {verifyImage} from '../../../assets/images';
import Input from '../../../components/input.component';
import {pxToPercentage} from '../../../core/libs/utils';
import {textFamily} from '../../../components/text-style';
import {default as themes} from '../../../core/themes/app-themes.json';
import Button from '../../../components/button.component';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {generateResetPasswordCode} from '../../../core/libs/generateCode';

type Props = {navigation?: any};
const OtpConfirmation = ({navigation}: Props) => {
  const [time, setTime] = useState<number>(20);
  // const [isResendCode, setIsResendCode] = useState<boolean>(false);
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [code, setCode] = useState<string>(generateResetPasswordCode());
  const [inputCode, setInputCode] = useState<string[]>(['', '', '', '']);
  useEffect(() => {
    if (time <= 0) {
      return;
    }
    const timeInterval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [time]);

  const onResendCodePress = () => {
    setCode(generateResetPasswordCode());
    setTime(20);
  };

  const handleOTPChange = (text: string, index: number) => {
    const newInputCode = [...inputCode];
    newInputCode[index] = text;
    setInputCode(newInputCode);

    // Focus on next input field
    if (text && index < otpRefs.length - 1) {
      const nextInputRef: any = otpRefs[index + 1];
      if (nextInputRef.current) {
        nextInputRef.current.focus();
      }
    }
  };

  const onConfirmPress = () => {
    if (inputCode.join('') !== code) {
      console.log('Wrong code');
      return;
    }
    if (time <= 0) {
      console.log('Code expired!');
      return;
    }
    navigation.popToTop();
  };

  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    screen: {
      backgroundColor: themes['primary-1'],
      height: Dimensions.get('screen').height,
      alignItems: 'center',
      paddingTop: insets.top + 40,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    pageTitle: {
      color: 'white',
      fontSize: 20,
      ...textFamily.notoSansBold,
      paddingVertical: 12,
      textAlign: 'center',
    },
    form: {
      backgroundColor: 'white',
      borderRadius: 25,
      paddingVertical: 28,
      paddingHorizontal: 24,
      gap: 12,
      width: pxToPercentage(310),
    },
    description: {
      fontSize: 14,
      color: themes['secondary-3'],
      textAlign: 'center',
    },
    otpContainer: {},
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    otpFieldContainer: {
      marginVertical: 0,
      width: pxToPercentage(55),
      paddingHorizontal: 0,
    },
    otpField: {
      flex: 1,
    },
    btnResendContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 12,
    },
    btnResend: {
      backgroundColor: 'transparent',
      paddingHorizontal: 0,
      height: 'auto',
    },
    btnResendText: {
      color: themes['primary-2'],
    },
    btnConfirmContainer: {
      alignItems: 'center',
    },
  });
  return (
    <View style={styles.screen}>
      <Icon source={verifyImage} />
      <Text style={styles.pageTitle}>{'Verify'}</Text>
      <View style={styles.form}>
        <Text style={styles.description}>
          {'Please enter the verification code sent to your phone number'}
        </Text>
        <View style={styles.otpContainer}>
          <Text>
            {'Your code here'} {code}
          </Text>
          <View style={styles.inputContainer}>
            {[...new Array(4)].map((item, index) => (
              <Input
                key={index}
                maxLength={1}
                keyboardType={'number-pad'}
                inputStyle={styles.otpField}
                inputContainerStyle={styles.otpFieldContainer}
                returnKeyType="done"
                onChangeText={(value: string) => handleOTPChange(value, index)}
                _ref={otpRefs[index]}
                textAlign="center"
              />
            ))}
          </View>
          <View style={styles.btnResendContainer}>
            <Text>Expried {time > 0 && `after ${time}s`}</Text>
            <Button
              children="Resend"
              onPress={onResendCodePress}
              btnStyle={styles.btnResend}
              btnTextStyle={styles.btnResendText}
            />
          </View>
        </View>
        <View style={styles.btnConfirmContainer}>
          <Button children="Confirm" onPress={onConfirmPress} />
        </View>
      </View>
      <StatusBar backgroundColor={themes['primary-1']} />
    </View>
  );
};

export default OtpConfirmation;
