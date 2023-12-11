import React from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import Icon from '../../../components/icon.component';
import {verifyImage} from '../../../assets/images';
import Input from '../../../components/input.component';
import {pxToPercentage} from '../../../core/libs/utils';
import {textFamily} from '../../../components/text-style';
import {default as themes} from '../../../core/themes/app-themes.json';
import Button from '../../../components/button.component';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {navigation?: any};
const OtpConfirmation = ({navigation}: Props) => {
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
      justifyContent: 'center',
      alignItems: 'center',
      width: pxToPercentage(55),
    },
    otpField: {
      width: 'auto',
    },
    btnResendContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
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
          <Text>{'Your code here'}</Text>
          <View style={styles.inputContainer}>
            {[...new Array(4)].map(item => (
              <Input
                key={item}
                maxLength={1}
                keyboardType={'number-pad'}
                inputStyle={styles.otpField}
                inputContainerStyle={styles.otpFieldContainer}
                returnKeyType="done"
              />
            ))}
          </View>
          <View style={styles.btnResendContainer}>
            <Text>Expried after 12s</Text>
            <Button
              children="Resend"
              btnStyle={styles.btnResend}
              btnTextStyle={styles.btnResendText}
            />
          </View>
        </View>
        <View style={styles.btnConfirmContainer}>
          <Button children="Confirm" onPress={() => navigation.popToTop()} />
        </View>
      </View>
      <StatusBar backgroundColor={themes['primary-1']} />
    </View>
  );
};

export default OtpConfirmation;
