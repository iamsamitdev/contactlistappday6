import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, margin: 20, justifyContent: 'center', }}>
      <Text />
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
      <Text />
      <Button title="To Actions" onPress={() => navigation.navigate("Tabs", {screen: 'Actions'})} />
    </SafeAreaView>
  )
}

export default Settings
