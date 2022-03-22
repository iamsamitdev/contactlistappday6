import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from './../components/CustomInput'
import CustomButton from './../components/CustomButton'
import SocialSignInButtons from './../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const NewPasswordScreen = () => {
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const navigation = useNavigation()

  const onSubmitPressed = () => {
    navigation.navigate('DrawerMenu')
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>รีเซ็ตรหัสผ่านของคุณ</Text>

        <CustomInput placeholder="Code" value={code} setValue={setCode} />

        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="บันทึก" onPress={onSubmitPressed} bgColor='#00838f' />

        <CustomButton
          text="กลับหน้าเข้าสู่ระบบ"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
})

export default NewPasswordScreen
