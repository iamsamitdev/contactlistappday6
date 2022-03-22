import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './../screens/SignIn'
import SignUp from './../screens/SignUp'
import ConfirmEmailScreen from './../screens/ConfirmEmailScreen'
import ForgotPasswordScreen from './../screens/ForgotPasswordScreen'
import NewPasswordScreen from './../screens/NewPasswordScreen'

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
