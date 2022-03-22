import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TabStack from './TabStack'
import CustomDrawer from './../components/CustomDrawer'
import Settings from './../screens/Settings'

const Drawer = createDrawerNavigator()

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: 'front', // front, slide, back
        drawerStyle: {
          flex: 1,
          width: '70%',
          // backgroundColor: 'yellow',
        },
        drawerActiveBackgroundColor: '#00838f',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        headerStyle: {
          backgroundColor: '#00838f',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home"
        component={TabStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={TabStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={TabStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={TabStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tabs"
        component={TabStack}
        options={{
          drawerLabel: 'Contacts',
          drawerIcon: ({ color }) => (
            <Ionicons name="people-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerLabel: 'Settings',
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
          gestureEnabled: false,
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerStack
