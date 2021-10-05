import {BottomTabBarOptions, BottomTabBarProps} from '@react-navigation/bottom-tabs'
import React from 'react'
import styled from 'styled-components/native'
import FaBars from '../../assets/icons/FaBars.svg'
import FaCalendarCheck from '../../assets/icons/FaCalendarCheck.svg'
import FaClock from '../../assets/icons/FaClock.svg'
import FaListAlt from '../../assets/icons/FaListAlt.svg'
import theme from '../../styles/theme'

const TabArea = styled.SafeAreaView`
  background: ${theme.colors.palleteHighConstrast};
  display: flex;
  flex-direction: row;
  height: 60px;
`

const TabItem = styled.TouchableOpacity`
  align-items: center;
  flex: 1;
  justify-content: center;
`

const defaultIconProps = {width: 24, height: 24, fill: theme.colors.pallete3}

export const CustomTabBar = ({state, navigation}: BottomTabBarProps<BottomTabBarOptions>) => {
  const navigate = (screen: string) => {
    navigation.navigate(screen)
  }

  const getIconProps = (screen: string) => {
    const additionalIconProps: any = {}
    if (screen === state.routeNames[state.index]) {
      additionalIconProps['fill'] = theme.colors.pallete4 
    }
    return {...defaultIconProps, ...additionalIconProps}
  }

  const tabs = [
    { name: 'Pomodoro', icon: FaClock}, 
    { name: 'Types', icon: FaListAlt}, 
    { name: 'Reports', icon: FaCalendarCheck}, 
    { name: 'Menu', icon: FaBars}
  ]
  return (
    <TabArea>
      { tabs.map((Tab, key) => (
        <TabItem key={key} onPress={e => navigate(Tab.name)}>
          <Tab.icon {...getIconProps(Tab.name)} />
        </TabItem>
      ))}
    </TabArea>
  )
}
export default CustomTabBar
