import React, {useState} from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import Icon from '../../../components/icon.component';
import {verifyImage} from '../../../assets/images';
import Input from '../../../components/input.component';
import {pxToPercentage} from '../../../core/libs/utils';
import {textFamily} from '../../../components/text-style';
import {default as themes} from '../../../core/themes/app-themes.json';
import Button from '../../../components/button.component';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppSelector} from '../../../core/hooks/redux.hook';

type Props = {
  navigation?: any;
};
const ResetPassword = ({navigation}: Props) => {
  const insets = useSafeAreaInsets();
  const {createdUser} = useAppSelector(state => state.signup);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const onSendCodeBtnPress = () => {
    if (phoneNumber !== createdUser.phoneNumber) {
      console.log('This phone number has not been registered');
      return;
    }
    navigation.navigate('OTP');
  };
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
      gap: 28,
      width: pxToPercentage(310),
    },
    description: {
      fontSize: 14,
      color: themes['secondary-3'],
      textAlign: 'center',
    },
    inputPhoneNumberFieldContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputPhoneNumberField: {
      width: 'auto',
    },
    btnSendCodeContainer: {
      marginVertical: 0,
      alignItems: 'center',
    },
  });
  return (
    <View style={styles.screen}>
      <Icon source={verifyImage} />
      <Text style={styles.pageTitle}>{'Reset your password'}</Text>
      <View style={styles.form}>
        <Text style={styles.description}>
          {' We will send a code to your phone to reset your password.'}
        </Text>
        {/* <View style={styles.otpContainer}> */}
        <Input
          label="Phone number"
          placeholder="Your phone number here"
          keyboardType={'number-pad'}
          returnKeyType="done"
          inputStyle={styles.inputPhoneNumberField}
          inputContainerStyle={styles.inputPhoneNumberFieldContainer}
          onChangeText={(value: string) => setPhoneNumber(value)}
        />
        {/* </View> */}
        <View style={styles.btnSendCodeContainer}>
          <Button children="Send code" onPress={onSendCodeBtnPress} />
        </View>
      </View>
      <StatusBar backgroundColor={themes['primary-1']} />
    </View>
  );
};

export default ResetPassword;
