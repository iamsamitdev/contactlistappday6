import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ContactsList from './../screens/ContactsList'
import ContactDetail from './../screens/ContactDetail'
import ActionsList from './../screens/ActionsList'
import ActionDetail from './../screens/ActionDetail'
import Ionicons from 'react-native-vector-icons/Ionicons'

const tabsStack = createStackNavigator()

const TabContactsListScreen = ({ navigation }) => {
  return (
    <tabsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00838f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Tahoma',
          fontWeight: 'bold',
        },
      }}>
      <tabsStack.Screen
        name="ContactsList"
        component={ContactsList}
        options={{
          headerTitle: 'รายชื่อติดต่อ',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={{ paddingLeft: 10 }}>
              <Ionicons name="menu-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <tabsStack.Screen
        name="ContactDetails"
        component={ContactDetail}
        options={({ route }) => {
          return {
            headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
            headerStyle: { backgroundColor: '#00838f' },
            headerTintColor: '#fff',
          }
        }}
      />
    </tabsStack.Navigator>
  )
}

const TabActionsScreen = ({ navigation }) => {
  return (
    <tabsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00838f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Tahoma',
          fontWeight: 'bold',
        },
      }}>
      <tabsStack.Screen
        name="ActionsList"
        component={ActionsList}
        options={{
          headerTitle: 'จัดการ',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={{ paddingLeft: 10 }}>
              <Ionicons name="menu-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <tabsStack.Screen name="ActionDetail" component={ActionDetail} />
    </tabsStack.Navigator>
  )
}

export { TabContactsListScreen, TabActionsScreen }
