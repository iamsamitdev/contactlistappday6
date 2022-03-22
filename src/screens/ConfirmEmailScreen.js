import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from './../components/CustomInput'
import CustomButton from './../components/CustomButton'
import SocialSignInButtons from './../components/SocialSignInButtons'

import { useNavigation } from '@react-navigation/core'

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('')

  const navigation = useNavigation()

  const onConfirmPressed = () => {
    navigation.navigate("DrawerMenu")
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  const onResendPress = () => {
    console.warn('onResendPress')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>ยืนยันอีเมล์ของคุณ</Text>

        <CustomInput
          placeholder="ป้อนรหัสที่ได้รับจากอีเมล์"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="ยืนยัน" onPress={onConfirmPressed} bgColor='#00838f' />

        <CustomButton
          text="ส่งรหัสอีกครั้ง"
          onPress={onResendPress}
          type="SECONDARY"
        />

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

export default ConfirmEmailScreen
