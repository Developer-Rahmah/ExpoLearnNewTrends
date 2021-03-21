import * as React from 'react'
import { useState } from 'react'
import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import TestComponent from '../components/TestComponent'
import { Text, View } from '../components/Themed'

export default function TabOneScreen () {
  const [person, setPerson] = useState<Person>({
    firstName: 'initial first name state',
    lastName: 'initial last name state'
  })
  return (
    <View style={styles.container}>
      <TestComponent firstName={person?.firstName} lastName='mahmoud' />
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='/screens/TabOneScreen.tsx' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
