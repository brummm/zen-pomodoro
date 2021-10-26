import React, {FC, useEffect, useRef, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import Animated, {Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming} from 'react-native-reanimated'
import {useTheme} from '../../hooks/theme'
import {secondsToString} from '../../lib/Date'
import {Time} from '../../models/Time'
import {TextBig, TextSmall} from '../../styles/global'
import CircularProgress, {strokeWidth} from '../CircularProgress'
import StartLabel from './StartLabel'
import {Area} from './styles'

interface ProgressProps {
  startFn: CallableFunction
  completedFn: CallableFunction
  paused: boolean
  timer?: number
  nextTime?: Time
  total?: number
  current?: number
}

const size = 194
const half = size / 2
export const Progress: FC<ProgressProps> = ({
  startFn,
  completedFn,
  paused,
  timer,
  nextTime,
  total,
  current,
}: ProgressProps) => {
  const {theme} = useTheme()
  const totalTime = useRef(timer)
  const [timerString, setTimerString] = useState<string | undefined>(undefined)
  const [progress, setProgress] = useState(0)
  const timerOpacity = useSharedValue(1)

  useEffect(() => {
    if (timer !== undefined) {
      if (totalTime.current === undefined) {
        totalTime.current = timer
      }
      if (timer === 0) {
        completedFn()
        setProgress(1)
      } else {
        setProgress(timer / totalTime.current)
        setTimerString(secondsToString(timer))
      }
    } else {
      setTimerString(undefined)
      setProgress(0)
      totalTime.current = undefined
    }
  }, [timer])

  //   useEffect(() => {
  //     if (timer !== undefined && totalTime.current) {
  //       let ip = 1 / totalTime.current
  //       const interval = setInterval(() => {
  //         const p = alpha * (progress - ip / progressInterval)
  //         strokeDashValue.setValue(p)
  //         console.log(p)
  //         ip++
  //       }, progressInterval)
  //       return () => {
  //         clearInterval(interval)
  //       }
  //     }
  //   }, [progress])

  useEffect(() => {
    if (paused) {
      timerOpacity.value = 1
      timerOpacity.value = withRepeat(
        withTiming(0.5, {
          duration: 1000,
          easing: Easing.ease,
        }),
        -1,
        true,
      )
    } else {
      timerOpacity.value = 1
    }
  }, [paused])

  const handlePressStart = async () => {
    startFn()
    // if (startFn !== undefined) {
    //   Animated.timing(strokeDashValue, {
    //     toValue: alpha,
    //     duration: 200,
    //     easing: Easing.ease,
    //     useNativeDriver: true,
    //   }).start(() => {
    //     startFn()
    //   })
    // }
  }

  const defaultValuesForText = {
    fontFamily: 'Roboto',
    fill: theme.colors.highContrast,
    fontWeight: 300,
    textAlign: 'center',
    style: {
      color: theme.colors.highContrast,
    },
  }

  const timerOpacityStyles = useAnimatedStyle(() => {
    return {
      opacity: timerOpacity.value,
    }
  })

  const textContainerSize = size - strokeWidth * 2

  const styles = StyleSheet.create({
    textContainer: {
      alignItems: 'center',
      flexDirection: 'column',
      height: textContainerSize,
      justifyContent: 'center',
      marginBottom: -textContainerSize,
      width: textContainerSize,
    },
  })

  return (
    <Area style={{width: size, height: size}} disabled={timer !== undefined} onPress={handlePressStart}>
      <View style={styles.textContainer}>
        {timer === undefined && (
          <StartLabel defaultValuesForText={defaultValuesForText} {...{timer, nextTime, current}} />
        )}

        {timer !== undefined && timerString !== undefined && current !== undefined && (
          <Animated.View style={[timerOpacityStyles]}>
            <TextBig {...defaultValuesForText}>{timerString}</TextBig>
            <TextSmall {...defaultValuesForText}>
              {current}/{total}
            </TextSmall>
          </Animated.View>
        )}
      </View>
      <CircularProgress progress={progress} size={size} />
    </Area>
  )
}

export default Progress
