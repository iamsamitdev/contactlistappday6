import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native'
import Logo from './../assets/images/SimpleLogo.png'
import CustomInput from './../components/CustomInput'
import CustomButton from './../components/CustomButton'
import SocialSignInButtons from './../components/SocialSignInButtons'

// Navigation
import { useNavigation } from '@react-navigation/native'

// เพิ่มการใช้งาน Context
import { AuthContext } from './../Context/context'

const SignIn = () => {

  // ตัวแปรสำหรับทำ Navigation
  const navigation = useNavigation()

  // ตัวแปรสำหรับหาความสูงของหน้าจอ
  const { height } = useWindowDimensions()

  // ตัวแปร state ไว้เก็บ username / password
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // เรียกใช้งาน Context
  const { SignIn } = useContext(AuthContext)

  // สร้างฟังก์ชันกดปุ่มเข้าสู่ระบบ
  const onSignInPressed = () => {
    // navigation.navigate('DrawerMenu')
    SignIn()
  }

  // สร้างฟังก์ชันเมื่อลืมรหัสผ่าน
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  }

  // สร้างฟังก์ชันไปหน้าสมัครสมาชิก
  const onSignUpPress = () => {
    navigation.navigate('SignUp')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton text="เข้าสู่ระบบ" onPress={onSignInPressed} bgColor='#00838f' /> 

        <CustomButton
          text="ลืมรหัสผ่าน ?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="ยังไม่มีบัญชี ? สร้างบัญชีใหม่"
          onPress={onSignUpPress}
          type="TERTIARY"
        />

      </View>
    </ScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
})
