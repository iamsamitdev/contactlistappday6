import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Modal from './../screens/Modal'
// import DrawerStack from './DrawerStack'
import AuthStack from './AuthStack';

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // presentation: 'modal',
        animationEnabled: true,
      }}>
      <Stack.Screen name="AuthMenu" component={AuthStack} />
      {/* <Stack.Screen name="DrawerMenu" component={DrawerStack} /> */}
      <Stack.Screen
        name="Modal"
        component={Modal}
        options={{
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.15)' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: 'clamp',
                }),
              },
            }
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default RootStack
