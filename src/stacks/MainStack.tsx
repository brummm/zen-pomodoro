import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Preload from '../screens/Preload'
import MainTab from './MainTab'

type StackParamList = {
  Preload: {}
  MainTab: {}
}

const Stack = createStackNavigator<StackParamList>()
export default () => {
  return (
    <Stack.Navigator initialRouteName="Preload"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  )
}
