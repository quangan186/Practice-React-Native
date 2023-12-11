import React, {useState} from 'react';
import {Dimensions, StatusBar, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {imageLogo} from '../../../assets/images';
import {pxToPercentage} from '../../../core/libs/utils';
import {textFamily} from '../../../components/text-style';
import {default as themes} from '../../../core/themes/app-themes.json';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from '../../../components/icon.component';
import Button from '../../../components/button.component';
import {Link} from '@react-navigation/native';
import Input from '../../../components/input.component';
import {eyeIcon, eyeSlashIcon} from '../../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {};

const SignIn = ({}: Props) => {
  const insets = useSafeAreaInsets();
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const styles = StyleSheet.create({
    screen: {
      backgroundColor: themes['primary-1'],
      height: Dimensions.get('screen').height,
      alignItems: 'center',
      // justifyContent: 'center',
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
    },
    form: {
      backgroundColor: 'white',
      borderRadius: 25,
      paddingVertical: 28,
      paddingHorizontal: 24,
      width: pxToPercentage(310),
    },
    btnForgotPassword: {
      backgroundColor: 'transparent',
      paddingHorizontal: 0,
      height: 'auto',
      marginBottom: 20,
    },
    btnForgotPasswordText: {
      color: themes['primary-2'],
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
    btnShowPassword: {},
  });
  return (
    <View style={styles.screen}>
      <Icon
        source={imageLogo}
        style={{
          width: pxToPercentage(35),
          height: pxToPercentage(44),
        }}
      />
      <Text style={styles.pageTitle}>{'Rentee'}</Text>
      <View style={styles.form}>
        <View>
          <Input label="Phone number" placeholder="Your phone number here" />
          <Input
            label="Password"
            placeholder="Your password"
            rightIcon={
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <Icon
                  source={hidePassword ? eyeIcon : eyeSlashIcon}
                  style={styles.btnShowPassword}
                />
              </TouchableOpacity>
            }
            secureTextEntry={hidePassword}
          />
        </View>
        <Button
          children="Forgot you password"
          btnStyle={styles.btnForgotPassword}
          btnTextStyle={styles.btnForgotPasswordText}
        />
        <View style={styles.btnContainer}>
          <Button children="Sign Up" />
          <Text style={styles.linkContainer}>
            {'Don’t have an account?'}{' '}
            <Link to={{screen: 'SignUp'}} style={styles.link}>
              Sign up
            </Link>
          </Text>
        </View>
      </View>
      <StatusBar backgroundColor={themes['primary-1']} />
    </View>
  );
};

export default SignIn;
