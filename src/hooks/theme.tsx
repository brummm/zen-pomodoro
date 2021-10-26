import React, { createContext, FC, useCallback, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components/native'
import themes, { MyTheme } from '../styles/themes'

interface ThemeContextProps {
  theme: MyTheme
  changeTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

export const useTheme = () => useContext(ThemeContext)

export const CustomThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<MyTheme>(themes[0])

  const changeTheme = useCallback(
    name => {
      const newTheme = themes.find(current => name === current.name)
      if (newTheme) {
        setTheme(newTheme)
      }
    },
    [theme],
  )

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {/* @ts-ignore */}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
