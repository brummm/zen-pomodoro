// as seen on https://www.youtube.com/watch?v=Y50CQfyFkGI&ab_channel=WilliamCandillon
import React, {useEffect, useRef, useState} from 'react'
import {Animated, Easing} from 'react-native'
import Svg, {Circle, CircleProps, G} from 'react-native-svg'
import {secondsToString} from '../../lib/Date'
import {Textasdfasdf, TextBig, TextSmall} from '../../styles/global'
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
  completedFn: CallableFunction,
  paused: boolean
  progress: number
  timer?: number
  total?: number
  current?: number
}

const alpha = Math.PI * 2 * radius

export const CircularProgress: React.FC<CircularProgressProps> = ({
  startFn,
  completedFn,
  paused,
  progress,
  timer,
  total,
  current,
}: CircularProgressProps) => {
  const strokeDashoffset = alpha * progress
  const strokeDashValue = useRef(new Animated.Value(strokeDashoffset)).current
  const [timerString, setTimerString] = useState<string | undefined>(undefined)
  const blinkAnimation = new Animated.Value(1)

  useEffect(() => {
    if (timer !== undefined) {
      Animated.timing(strokeDashValue, {
        toValue: strokeDashoffset,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start()
      setTimerString(secondsToString(timer))
      if (timer === 0) {
        completedFn()
      }
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

  useEffect(() => {
    if (paused) {
      blinkAnimation.setValue(0)
      const animationProps = {
        duration: 500,
        useNativeDriver: true,
      }
      console.log('passou')
      Animated.loop(
        Animated.sequence([
          Animated.timing(blinkAnimation, {
            toValue: 0,
            ...animationProps,
          }),
          Animated.timing(blinkAnimation, {
            toValue: 1,
            ...animationProps,
          }),
        ]),
      ).start()
    } else {
      blinkAnimation.setValue(1)
    }
  }, [paused])

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
      color: theme.colors.palleteHighConstrast,
    },
  }

  const defaultValuesForCircle: CircleProps = {
    fill: 'none',
    cx: size / 2,
    cy: size / 2,
    r: radius,
    strokeDasharray: circumference,
    strokeLinecap: 'round',
    ...{strokeWidth},
  }

  return (
    <>
      <TextContainer>
        {timer === undefined && (
          <TextSmall {...{...defaultCenteredValues, ...defaultValuesForText}} textAlign="center">Tap to start.</TextSmall>
        )}
        {timer !== undefined && timerString !== undefined && (
          <Animated.View style={{opacity: blinkAnimation}}>
            <TextBig {...defaultValuesForText} textAlign="center">
              {timerString}
            </TextBig>
            <TextSmall {...defaultValuesForText} textAlign="center">
              {current}/{total}
            </TextSmall>
          </Animated.View>
        )}
      </TextContainer>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0  ${halfCircle * 2} ${halfCircle * 2}`}
        disabled={timer !== undefined}
        onPress={handlePressStart}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle stroke="rgba(0, 0, 0, .1)" {...defaultValuesForCircle} />
          <AnimatedCircle
            stroke={theme.colors.palleteHighConstrast}
            strokeDashoffset={strokeDashValue}
            {...defaultValuesForCircle}
          />
        </G>
      </Svg>
    </>
  )
}

export default CircularProgress
