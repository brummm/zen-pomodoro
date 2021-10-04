import {BottomTabBarOptions, BottomTabBarProps} from '@react-navigation/bottom-tabs'
import React from 'react'
import styled from 'styled-components/native'
import theme from '../../styles/theme'
import FaBars from '../../assets/icons/FaBars.svg'
import FaCalendarCheck from '../../assets/icons/FaCalendarCheck.svg'
import FaListAlt from '../../assets/icons/FaListAlt.svg'
import {useNavigation} from '@react-navigation/core'

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

const iconProps = {width: 24, height: 24, fill: theme.colors.pallete3}

export const CustomTabBar = (props: BottomTabBarProps<BottomTabBarOptions>) => {
  const navigation = useNavigation()

  const navigate = (where: string) => {
    navigation.navigate(where)
  }
  return (
    <TabArea>
      <TabItem onPress={e => navigate('Types')}>
        <FaListAlt {...iconProps} />
      </TabItem>
      <TabItem onPress={e => navigate('Reports')}>
        <FaCalendarCheck {...iconProps} />
      </TabItem>
      <TabItem onPress={e => navigate('Menu')}>
        <FaBars {...iconProps} />
      </TabItem>
    </TabArea>
  )
}
export default CustomTabBar
