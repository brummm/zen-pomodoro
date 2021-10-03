import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import MainStack from './src/stacks/MainStack'
import {ThemeProvider} from 'styled-components/native'
import theme from './src/styles/theme'

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainStack></MainStack>
      </NavigationContainer>
    </ThemeProvider>
  )
}
