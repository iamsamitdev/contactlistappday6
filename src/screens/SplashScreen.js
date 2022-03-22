import { StyleSheet, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import LogoSplash from './../assets/images/logosplash.jpg'

const SplashScreen = () => {

  const { height } = useWindowDimensions()

  return (
    <View style={styles.container}>
      <Image
        source={LogoSplash}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00D19A',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
})
