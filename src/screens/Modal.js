import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Modal = ({navigation}) => {
  return (
    <View
      style={{
        // flex: 1,
        marginTop: '40%',
        height: '50%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        margin: 40,
        borderRadius: 10
      }}>
        <Text style={{fontSize: 24,}}>Title</Text>
        <Text />
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed, modi sapiente natus eligendi nam corporis asperiores impedit. Veniam dolores optio quas eveniet nulla beatae quam harum illo asperiores ipsum.</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'white', padding: 20 }}
        onPress={() => navigation.pop()}>
        <Text>Close Modal</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Modal
