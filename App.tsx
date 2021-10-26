import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import ConfigContext from './src/contexts/ConfigContext'
import {CustomThemeProvider} from './src/hooks/theme'
import MainStack from './src/stacks/MainStack'

// TODO: load the configs that will fill the ConfigContext.Provider
export default () => {
  return (
    <ConfigContext.Provider value={{autoPlay: false}}>
      <CustomThemeProvider>
        <NavigationContainer>
          <MainStack></MainStack>
        </NavigationContainer>
      </CustomThemeProvider>
    </ConfigContext.Provider>
  )
}
