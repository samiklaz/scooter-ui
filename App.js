import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './src/navigator/Navigation'
import { Text } from 'react-native'

export default function App() {
  return (
   <NavigationContainer>
    <HomeStackNavigator />
   </NavigationContainer>
  )
}