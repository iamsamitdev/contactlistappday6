import React from 'react'
import { Text, ScrollView } from 'react-native'

const ContactDetail = ({ route }) => {
  const contactInfo = route.params.contact

  return (
    <ScrollView>
      <Text>{JSON.stringify(contactInfo, null, 2)}</Text>
    </ScrollView>
  )
}

export default ContactDetail
