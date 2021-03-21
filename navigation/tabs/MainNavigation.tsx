import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import MainScreen from '../../screens/mainTab/MainScreen'
import SettingsScreen from '../../screens/settings/SettingsScreen'
import BottomTabNavigator from '../BottomTabNavigator'

const MainStack = createStackNavigator<MainNavigationParamList>()

export default function MainNavigation () {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='BottomTab'
        component={BottomTabNavigator}
        options={{ headerTitle: 'Main' }}
      />
      <MainStack.Screen
        name='Settings'
        component={SettingsScreen}
        options={{ headerTitle: 'settings' }}
      />
    </MainStack.Navigator>
  )
}

const styles = StyleSheet.create({})
