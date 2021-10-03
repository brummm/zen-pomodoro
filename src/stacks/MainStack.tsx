import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Preload from '../screens/Preload'
import Start from '../screens/Start'

type StackParamList = {
  Preload: {}
  Start: {}
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
      <Stack.Screen name="Start" component={Start} />
    </Stack.Navigator>
  )
}
