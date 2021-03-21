import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import MyBookDetailsScreen from '../../screens/collectionTab/MyBookDetailsScreen'
import MyCollectionScreen from '../../screens/collectionTab/MyCollectionScreen'
import MyRequestScreen from '../../screens/collectionTab/MyRequestScreen'
import MySentRequestScreen from '../../screens/collectionTab/MySentRequestScreen'
import NewBookScreen from '../../screens/collectionTab/NewBookScreen'

const CollectionStack = createStackNavigator<CollectionParamList>()

export default function CollectionTabStack () {
  return (
    <CollectionStack.Navigator>
      <CollectionStack.Screen
        name='MyCollectionScreen'
        component={MyCollectionScreen}
        options={{ headerTitle: 'My Collection' }}
      />

      <CollectionStack.Screen
        name='MyBookDetailsScreen'
        component={MyBookDetailsScreen}
        options={{ headerTitle: 'Book Details' }}
      />

      <CollectionStack.Screen
        name='MyRequestScreen'
        component={MyRequestScreen}
        options={{ headerTitle: 'My Request' }}
      />

      <CollectionStack.Screen
        name='MySentRequestScreen'
        component={MySentRequestScreen}
        options={{ headerTitle: 'My Sent Request' }}
      />

      <CollectionStack.Screen
        name='NewBookScreen'
        component={NewBookScreen}
        options={{ headerTitle: 'New Book' }}
      />
    </CollectionStack.Navigator>
  )
}

const styles = StyleSheet.create({})
