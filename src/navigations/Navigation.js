import React, { useState, useEffect, useMemo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import AppStack from './AppStack'
// import TabStack from './TabStack'
// import AuthStack from './AuthStack'
import DrawerStack from './DrawerStack'
import RootStack from './RootStack'
import SplashScreen from './../screens/SplashScreen'

// เพิ่มการใช้งาน Context
import { AuthContext } from './../Context/context'

const Navigation = () => {
  // สร้างตัวแปรแบบ State ไว้เก็บสถานะการ Loading
  const [isLoading, setIsLoading] = useState(true)

  // สร้างตัวแปร State ไว้ทดสอบเก็บ Token
  const [userToken, setUserToken] = useState(null)

  // เรียกใช้ useEffect เพื่อเรียกทำงานฟังก์ชัน Loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  // เพิ่มการใช้งาน useMemo เก็บค่าฟังก์ชันและตัวแปรต่างๆ ไว้ เมื่อโหลด component ครั้งแรก
  const authContext = useMemo(
    () => ({
      SignIn: () => {
        setUserToken('aaaaaa')
        setIsLoading(false)
      },
      signOut: () => {
        setUserToken(null)
        setIsLoading(false)
      },
      signUp: () => {
        setUserToken('bbbbbb')
        setIsLoading(false)
      },
    }),
    [],
  )

  // ทำการเช็คตัวแปร isLoading ว่าเป็น true / false เพื่อทำการโหลดหน้า SplashScreen
  if (isLoading) {
    return <SplashScreen />
  }

  // ทดสอบ log ดูค่า userToken
  console.log('userToken='+ userToken)

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>

        {/* <AppStack /> */}
        {/* <TabStack /> */}
        {/* <AuthStack /> */}
        {/* <DrawerStack /> */}
        {/* <RootStack /> */}

        {
          userToken != null ? <DrawerStack /> : <RootStack />
        }

      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default Navigation
