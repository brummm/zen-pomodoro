import React, {FC} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Pomodoro from '../screens/Pomodoro'
import Types from '../screens/Types'
import Reports from '../screens/Reports'
import Menu from '../screens/Menu'
import CustomTabBar from '../components/CustomTabBar'

const Tab = createBottomTabNavigator()

export const MainTab: FC = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Pomodoro" component={Pomodoro} />
      <Tab.Screen name="Types" component={Types} />
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  )
}
export default MainTab
