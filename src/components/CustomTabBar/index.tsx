import {BottomTabBarOptions, BottomTabBarProps} from '@react-navigation/bottom-tabs'
import React, { FC, useContext } from 'react'
import styled from 'styled-components/native'
import FaBars from '../../assets/icons/FaBars.svg'
import FaCalendarCheck from '../../assets/icons/FaCalendarCheck.svg'
import FaClock from '../../assets/icons/FaClock.svg'
import FaListAlt from '../../assets/icons/FaListAlt.svg'
import { useTheme } from '../../hooks/theme'
import theme from '../../styles/themes'




export const CustomTabBar = ({state, navigation}: BottomTabBarProps<BottomTabBarOptions>) => {
  const { theme, changeTheme } = useTheme()
  const defaultIconProps = {width: 24, height: 24, fill: theme.colors.main}

  const TabArea = styled.SafeAreaView`
  background: ${theme.colors.highContrast};
  display: flex;
  flex-direction: row;
  height: 60px;
`

const TabItem = styled.TouchableOpacity`
  align-items: center;
  flex: 1;
  justify-content: center;
`

  interface Tab {
    name: string
    icon: FC
    theme: string
  }
  const navigate = (tab: Tab) => {
    navigation.navigate(tab.name)
    changeTheme(tab.theme)
  }

  const getIconProps = (screen: string) => {
    const additionalIconProps: any = {}
    if (screen === state.routeNames[state.index]) {
      additionalIconProps['fill'] = theme.colors.emphasis
    }
    return {...defaultIconProps, ...additionalIconProps}
  }

  const tabs = [
    { name: 'Pomodoro', icon: FaClock, theme: 'green'}, 
    { name: 'Types', icon: FaListAlt, theme: ''}, 
    { name: 'Reports', icon: FaCalendarCheck, theme: 'brown'}, 
    { name: 'Menu', icon: FaBars, theme: 'white'}
  ]
  return (
    <TabArea>
      { tabs.map((Tab, key) => (
        <TabItem key={key} onPress={e => navigate(Tab)}>
          <Tab.icon {...getIconProps(Tab.name)} />
        </TabItem>
      ))}
    </TabArea>
  )
}
export default CustomTabBar
