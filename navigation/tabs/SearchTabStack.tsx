import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import BookDetailsScreen from '../../screens/searchTab/BookDetailsScreen'
import SearchScreen from '../../screens/searchTab/SearchScreen'

const SearchStack = createStackNavigator<SearchParamList>()

export default function SearchTabStack () {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{ headerTitle: 'search for a book' }}
      />
      <SearchStack.Screen
        name='BookDetailsScreen'
        component={BookDetailsScreen}
        options={{ headerTitle: 'book details' }}
      />
    </SearchStack.Navigator>
  )
}

const styles = StyleSheet.create({})
