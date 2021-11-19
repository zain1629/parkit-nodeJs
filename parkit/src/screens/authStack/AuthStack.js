import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
// import SignInScreen from './SignInScreen';
// import SignUpScreen from './SignUpScreen';
// import ForgotPasswordScreen from './ForgotPasswordScreen';
// import ForgotPasswordSubmitScreen from './ForgotPasswordSubmitScreen';
// import ConfirmSignUpScreen from './ConfirmSignUpScreen';

const AuthStack = createStackNavigator();

const AuthStackScreens = ({navigation}) => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
    {/* <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
    <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <AuthStack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
    />
    <AuthStack.Screen
      name="ForgotPasswordSubmitScreen"
      component={ForgotPasswordSubmitScreen}
    />
    <AuthStack.Screen
      name="ConfirmSignUpScreen"
      component={ConfirmSignUpScreen}
    /> */}
  </AuthStack.Navigator>
);

export default AuthStackScreens;
