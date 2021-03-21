import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Button, StyleSheet } from 'react-native'
import { View, Text } from '../../components/Themed'

export default function MyCollectionScreen ({navigation}:{navigation:StackNavigationProp<CollectionParamList>}) {
  const navigate= ()=>{
    navigation.navigate("MyBookDetailsScreen",{bookId:1})
  }
  return (
    <View>
      <Text>MyCollectionScreen</Text>
      <Button title="go" onPress={navigate} />
    </View>
  )
}

const styles = StyleSheet.create({})
