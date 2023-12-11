/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from '../../../components/icon.component';
import {imageLogo} from '../../../assets/images';
import Input from '../../../components/input.component';
import {Link} from '@react-navigation/native';
import {default as themes} from '../../../core/themes/app-themes.json';
import {textFamily} from '../../../components/text-style';
import Button from '../../../components/button.component';
import {pxToPercentage} from '../../../core/libs/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {eyeIcon, eyeSlashIcon} from '../../../assets/icons';
type Props = {
  navigation?: any;
};

const SignUp = ({navigation}: Props) => {
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    screen: {
      backgroundColor: themes['primary-1'],
      flex: 1,
      alignItems: 'center',
      // justifyContent: 'center',
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    pageTitle: {
      color: 'white',
      fontSize: 20,
      ...textFamily.notoSansBold,
      paddingVertical: 12,
    },
    form: {
      backgroundColor: 'white',
      borderRadius: 25,
      paddingVertical: 28,
      paddingHorizontal: 24,
      gap: 12,
      width: pxToPercentage(310),
    },
    btnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
    },
    linkContainer: {
      fontSize: 12,
      color: themes['secondary-2'],
      ...textFamily.notoSansRegular,
    },
    link: {
      color: themes['primary-2'],
    },
  });

  const [hidePassword, setHidePassword] = useState<boolean>(true);

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <KeyboardAvoidingView
        style={{flex: 1}} // Take up full space
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} // Adjust this value as needed
      >
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          style={{flex: 1, backgroundColor: 'transparent'}}>
          <Icon
            source={imageLogo}
            style={{
              width: pxToPercentage(35),
              height: pxToPercentage(44),
            }}
          />
          <Text style={styles.pageTitle}>{'Rentee'}</Text>
          <View style={styles.form}>
            <View style={{}}>
              <Input label="Your full name" placeholder="E.g. John Smith" />
              <Input
                label="Phone number"
                placeholder="Your phone number here"
              />
              <Input
                label="Password"
                placeholder="Your new password"
                rightIcon={
                  <TouchableOpacity
                    onPress={() => setHidePassword(!hidePassword)}>
                    <Icon source={hidePassword ? eyeIcon : eyeSlashIcon} />
                  </TouchableOpacity>
                }
                secureTextEntry={hidePassword}
              />
              <Input
                label="Retype your password"
                placeholder="Retype your new password"
                rightIcon={
                  <TouchableOpacity
                    onPress={() => setHidePassword(!hidePassword)}>
                    <Icon source={hidePassword ? eyeIcon : eyeSlashIcon} />
                  </TouchableOpacity>
                }
                secureTextEntry={hidePassword}
              />
            </View>
            <View style={styles.btnContainer}>
              <Button children="Sign Up" />
              <Text style={styles.linkContainer}>
                {'Already have an account?'}{' '}
                <Link to={{screen: 'SignIn'}} style={styles.link}>
                  Sign in
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
        <StatusBar backgroundColor={themes['primary-1']} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUp;
