// as seen on https://www.youtube.com/watch?v=Y50CQfyFkGI&ab_channel=WilliamCandillon
import React, {useEffect, useRef, useState} from 'react'
import {Animated, Easing} from 'react-native'
import Svg, {Circle, G} from 'react-native-svg'
import {secondsToString} from '../../lib/Date'
import {TextBig, TextSmall} from '../../styles/global'
import theme from '../../styles/theme'
import {TextContainer} from './styles'

const size = 194
const strokeWidth = 3
const radius = (size - strokeWidth) / 2
const circumference = 2 * Math.PI * radius
const halfCircle = radius + strokeWidth

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
interface CircularProgressProps {
  startFn: CallableFunction
  progress: number
  timer?: number
  total?: number
  current?: number
}

const alpha = Math.PI * 2 * radius

export const CircularProgress: React.FC<CircularProgressProps> = ({
  startFn,
  progress,
  timer,
  total,
  current,
}: CircularProgressProps) => {
  const strokeDashoffset = alpha * progress
  const strokeDashValue = useRef(new Animated.Value(strokeDashoffset)).current
  const [timerString, setTimerString] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (timer !== undefined) {
      Animated.timing(strokeDashValue, {
        toValue: strokeDashoffset,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start()
      setTimerString(secondsToString(timer))
    } else {
      Animated.timing(strokeDashValue, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start()
      setTimerString(undefined)
    }
  }, [timer])

  const handlePressStart = async () => {
    if (startFn !== undefined) {
      Animated.timing(strokeDashValue, {
        toValue: alpha,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        startFn()
      })
    }
  }

  const defaultCenteredValues = {
    x: halfCircle,
    y: halfCircle,
  }

  const defaultValuesForText = {
    fontFamily: 'Roboto',
    fill: theme.colors.palleteHighConstrast,
    fontWeight: 300,
    textAlign: 'center',
    style: {
      color: theme.colors.palleteHighConstrast
    }
  }

  return (
    <>
      <TextContainer>
        {timer === undefined && (
          <TextSmall {...{...defaultCenteredValues, ...defaultValuesForText}}>Tap to start.</TextSmall>
        )}
        {timer !== undefined && timerString !== undefined && (
          <>
            <TextBig {...defaultValuesForText}>{timerString}</TextBig>
            <TextSmall {...defaultValuesForText}>
              {current}/{total}
            </TextSmall>
          </>
        )}
      </TextContainer>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0  ${halfCircle * 2} ${halfCircle * 2}`}
        disabled={timer !== undefined}
        onPress={handlePressStart}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <AnimatedCircle
            stroke={theme.colors.palleteHighConstrast}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashValue}
            {...{strokeWidth}}
          />
        </G>
      </Svg>
    </>
  )
}

export default CircularProgress
