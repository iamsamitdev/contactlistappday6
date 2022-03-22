import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from './CustomButton'

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook')
  }

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle')
  }

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        fgColor="#E7EAF4"
        bgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        fgColor="#FAE9EA"
        bgColor="#DD4D44"
      />
    </>
  )
}

export default SocialSignInButtons
