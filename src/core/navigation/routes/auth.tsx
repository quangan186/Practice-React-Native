import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SignUp from '../../../containers/auth/sign-up/sign-up.component';
import OtpConfirmation from '../../../containers/auth/otp/otp-confirmation.component';
import SignIn from '../../../containers/auth/sign-in/sign-in.component';
import ResetPassword from '../../../containers/auth/reset-password/reset-password.component';
type Props = {};

const AuthNavigator = ({}: Props) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SignIn">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OTP" component={OtpConfirmation} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
