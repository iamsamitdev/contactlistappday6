import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { TabContactsListScreen, TabActionsScreen } from './AppStack'

const Tabs = createBottomTabNavigator()

const TabStack = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff176',
        tabBarInactiveTintColor: '#e0f7fa',
        tabBarStyle: {
          backgroundColor: '#00838f',
          height: 56,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          fontSize: 20,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}>
      <Tabs.Screen
        name="Contacts"
        component={TabContactsListScreen}
        options={{
          tabBarLabel: 'รายชื่อติดต่อ',
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="person-circle-outline" size={24} color={color} />
            )
          },
        }}
      />
      <Tabs.Screen
        name="Actions"
        component={TabActionsScreen}
        options={{
          tabBarLabel: 'จัดการ',
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color={color}
              />
            )
          },
        }}
      />
    </Tabs.Navigator>
  )
}

export default TabStack
