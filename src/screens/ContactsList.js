import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { Row, Separator } from '../components/Row'
import users from './../model/user'

const ContactsList = ({ navigation }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={users}
        keyExtractor={item => {
          return `${item.id.value}-${item.phone}`
        }}
        renderItem={({ item }) => {
          const name = `${item.name.first} ${item.name.last}`

          return (
            <Row
              image={{ uri: item.picture.thumbnail }}
              title={name}
              subtitle={item.email}
              // onPress={() => alert(name)}
              onPress={() => navigation.navigate('ContactDetails',  {contact: item})}
            />
          )
        }}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={() => <Separator />}
        ListFooterComponent={() => <Separator />}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </SafeAreaView>
  )
}

export default ContactsList