import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import TabBarIcon from '../components/TabBarIcon'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import CollectionTabStack from './tabs/CollectionTabStack'
import MainTabStack from './tabs/MainTabStack'
import SearchTabStack from './tabs/SearchTabStack'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator () {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName='MainTab'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name='MainTab'
        component={MainTabStack}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name='CollectionTab'
        component={CollectionTabStack}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name='SearchTab'
        component={SearchTabStack}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}
