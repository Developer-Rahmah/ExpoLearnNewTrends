import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'
import { ScreenContext } from '../contexts/ScreenContext'

import LinkingConfiguration from './LinkingConfiguration'
import RootNavigator from './RootNavigator'
import AuthNavigation from './tabs/AuthNavigation'
import MainNavigation from './tabs/MainNavigation'

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation ({
  colorScheme
}: {
  colorScheme: ColorSchemeName
}) {
  const screenContext = React.useContext(ScreenContext)

  if (screenContext.currentScreen == 'Auth') {
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        <RootNavigator childComponent={AuthNavigation} />
      </NavigationContainer>
    )
  } else if (screenContext.currentScreen == 'Main') {
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        <RootNavigator childComponent={MainNavigation} />
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        <RootNavigator childComponent={AuthNavigation} />
      </NavigationContainer>
    )
  }
}
