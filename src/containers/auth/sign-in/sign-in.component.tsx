import React, {useCallback, useState} from 'react';
import {Dimensions, Keyboard, StatusBar, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {imageLogo} from '../../../assets/images';
import {pxToPercentage} from '../../../core/libs/utils';
import {textFamily} from '../../../components/text-style';
import {default as themes} from '../../../core/themes/app-themes.json';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from '../../../components/icon.component';
import Button from '../../../components/button.component';
import {Link, useFocusEffect} from '@react-navigation/native';
import Input from '../../../components/input.component';
import {eyeIcon, eyeSlashIcon} from '../../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAppDispatch, useAppSelector} from '../../../core/hooks/redux.hook';
import {login} from '../../../core/store/auth';

type Props = {
  navigation?: any;
};

const SignIn = ({navigation}: Props) => {
  const insets = useSafeAreaInsets();
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();
  const {createdUser} = useAppSelector(state => state.signup);
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
    },
    form: {
      backgroundColor: 'white',
      borderRadius: 25,
      paddingVertical: 28,
      paddingHorizontal: 24,
      width: pxToPercentage(310),
    },
    btnForgotPasswordContainer: {
      flex: 0,
      alignItems: 'flex-start',
    },
    btnForgotPassword: {
      backgroundColor: 'transparent',
      paddingHorizontal: 0,
      height: 'auto',
      marginBottom: 20,
      flex: 0,
      alignSelf: 'stretch',
      // alignItems: 'flex-start',
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

  const onLoggedInPress = () => {
    Keyboard.dismiss();
    if (!phoneNumber.trim() || !password.trim()) {
      console.log('Enter your phone number and password');
      return;
    }
    if (
      phoneNumber !== createdUser.phoneNumber ||
      password !== createdUser.password
    ) {
      console.log('Invalid phone number or password');
      return;
    }
    dispatch(login({username: createdUser.username, phoneNumber: phoneNumber}));
    console.log('Logged In successful');
  };

  const resetState = useCallback(() => {
    setPhoneNumber('');
    setPassword('');
    // Add other state resets if needed
  }, []);

  // Use the useFocusEffect hook
  useFocusEffect(
    useCallback(() => {
      return () => {
        // This is the cleanup function that runs when the screen loses focus
        resetState();
      };
    }, [resetState]),
  );

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
          <Input
            label="Phone number"
            onChangeText={(value: string) => setPhoneNumber(value)}
            placeholder="Your phone number here"
            defaultValue={phoneNumber}
          />
          <Input
            label="Password"
            placeholder="Your password"
            defaultValue={password}
            onChangeText={(value: string) => setPassword(value)}
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
        <View style={styles.btnForgotPasswordContainer}>
          <Button
            children="Forgot you password"
            btnStyle={styles.btnForgotPassword}
            btnTextStyle={styles.btnForgotPasswordText}
            onPress={() => navigation.navigate('ResetPassword')}
          />
        </View>

        <View style={styles.btnContainer}>
          <Button children="Sign In" onPress={onLoggedInPress} />
          <Text style={styles.linkContainer}>
            {'Don’t have an account?'}{' '}
            <Link
              to={{screen: 'SignUp'}}
              // action={navigation.replace('SignUp')}
              style={styles.link}>
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
