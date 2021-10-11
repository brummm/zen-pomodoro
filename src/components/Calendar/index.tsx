import React, { FC, useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import FaChevronLeft from '../../assets/icons/FaChevronLeft.svg'
import FaChevronRight from '../../assets/icons/FaChevronRight.svg'
import { getMonthData } from '../../lib/Date'
import theme from '../../styles/theme'
import Day from '../Day'
import { Container, Control, ControlLeft, Days, MonthControls, MonthName } from './styles'

const controlIconProps = {
  fill: theme.colors.pallete3,
  width: 18,
  height: 28,
}
interface Props {
  month: number
  year: number
  changeMonth: (amount: number) => void
}
export const Calendar: FC<Props> = ({month, year, changeMonth}) => {
  const {name, last, initialFreeSpace} = getMonthData(month, year)
  const days = [...Array(last).keys()]
  days.shift()
  const freeSpace = Array(initialFreeSpace).fill(null, 0, initialFreeSpace)
  const daysOfMonth = [...freeSpace, ...days]

  const direction = useRef(-1)
  const daysAnimValue = useRef(new Animated.Value(0)).current

  const animateIn = async () => {
    daysAnimValue.setValue(150 * -direction.current)
    return new Promise(resolve => {
      Animated.timing(daysAnimValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        resolve(true)
      })
    })
  }

  const animateOut = async () => {
    
    return new Promise(resolve => {
      Animated.timing(daysAnimValue, {
        toValue: 150 * direction.current,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        resolve(true)
      })
    })
  }

  const applyAndChangeMonth = async (_direction: number) => {
    direction.current = _direction
    await animateOut()
    changeMonth(_direction)
  }

  useEffect(() => {
    animateIn()
  }, [month, year])

  return (
    <Container>
      <MonthControls>
        <ControlLeft onPress={e => applyAndChangeMonth(-1)}>
          <FaChevronLeft {...controlIconProps} />
        </ControlLeft>
        <MonthName>
          {name} {year}
        </MonthName>
        <Control onPress={e => applyAndChangeMonth(1)}>
          <FaChevronRight {...controlIconProps} />
        </Control>
      </MonthControls>
      <Animated.View
        style={{
          translateX: daysAnimValue,
          opacity: daysAnimValue.interpolate({
            inputRange: [-150, 0, 150],
            outputRange: [0, 1, 0],
          }),
        }}>
        <Days>
          {daysOfMonth.map((day, key) => (
            <Day key={key} day={day} />
          ))}
        </Days>
      </Animated.View>
    </Container>
  )
}
