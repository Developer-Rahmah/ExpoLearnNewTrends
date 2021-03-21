import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import TabBarIcon from '../components/TabBarIcon'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import TabOneNavigator from './tabs/TabOneNavigator'
import TabTwoNavigator from './tabs/TabTwoNavigator'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator () {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName='TabOne'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name='TabOne'
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name='TabTwo'
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}
