import React from 'react'
import { useContext } from 'react'
import { Button, StyleSheet } from 'react-native'
import { View, Text } from '../../components/Themed'
import { ScreenContext } from '../../contexts/ScreenContext'
import { useLocal } from '../../hooks/useLocal'

export default function SignInScreen () {
  const screenContext = useContext(ScreenContext)

  const signIn = () => {
    if (screenContext.setCurrentScreen != undefined) {
      screenContext.setCurrentScreen('Main')
    }
  }
  return (
    <View>
      <Text>SignInScreen</Text>
      <Text>{useLocal({},"greeting")}</Text>
      <Button title='signin' onPress={signIn} />
    </View>
  )
}

const styles = StyleSheet.create({})
