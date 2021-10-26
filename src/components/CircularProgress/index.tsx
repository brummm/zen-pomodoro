// as seen on https://www.youtube.com/watch?v=Y50CQfyFkGI&ab_channel=WilliamCandillon
import React, {useEffect, useRef, useState} from 'react'
import {Animated, Easing} from 'react-native'
import Svg, {Circle, CircleProps, G} from 'react-native-svg'
import {useTheme} from '../../hooks/theme'



const AnimatedCircle = Animated.createAnimatedComponent(Circle)
interface CircularProgressProps {
  progress: number
  size: number
}

export const strokeWidth = 3

export const CircularProgress: React.FC<CircularProgressProps> = ({progress, size}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const halfCircle = radius + strokeWidth
  const alpha = Math.PI * 2 * radius

  const {theme} = useTheme()
  const strokeDashoffset = alpha * progress
  const strokeDashValue = useRef(new Animated.Value(strokeDashoffset)).current

  useEffect(() => {
    if (progress !== undefined) {
      strokeDashValue.setValue(strokeDashoffset)
    } else {
      Animated.timing(strokeDashValue, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start()
    }
  }, [progress])

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
      <Svg width={radius * 2} height={radius * 2} viewBox={`0 0  ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle stroke="rgba(0, 0, 0, .1)" {...defaultValuesForCircle} />
          <AnimatedCircle
            stroke={theme.colors.highContrast}
            strokeDashoffset={strokeDashValue}
            {...defaultValuesForCircle}
          />
        </G>
      </Svg>
    </>
  )
}

export default CircularProgress
