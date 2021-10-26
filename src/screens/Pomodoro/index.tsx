import React, {useContext, useEffect, useState} from 'react'
import Brand from '../../assets/Brand.svg'
import FaPause from '../../assets/icons/FaPause.svg'
import FaStepForward from '../../assets/icons/FaStepForward.svg'
import FaStop from '../../assets/icons/FaStop.svg'
import Progress from '../../components/Progress'
import ConfigContext from '../../contexts/ConfigContext'
import {useTheme} from '../../hooks/theme'
import {Session} from '../../models/Session'
import {Time, TimeType} from '../../models/Time'
import { Container } from '../../styles/global'
import {BURDGUNDY, GREEN, PINK, PURPLE} from '../../styles/themes'
import {BrandContainer, Control, Controls, MainText, SecondaryText} from './styles'

const getTexts = () => {
  const primary = 'Zen Pomodoro Timer'
  const secondary = ''
  return {
    primary,
    secondary,
  }
}

const session: Session = {
  times: [
    {completed: false, time: 1500, type: TimeType.FOCUS},
    {completed: false, time: 300, type: TimeType.INTERVAL},

    {completed: false, time: 1500, type: TimeType.FOCUS},
    {completed: false, time: 300, type: TimeType.INTERVAL},

    {completed: false, time: 1500, type: TimeType.FOCUS},
    {completed: false, time: 300, type: TimeType.INTERVAL},

    {completed: false, time: 1500, type: TimeType.FOCUS},
    {completed: false, time: 900, type: TimeType.BIG_INTERVAL},
  ],
}
const totalSteps = session.times.length

export const Pomodoro: React.FC = () => {
  const {theme, changeTheme} = useTheme()

  const {autoPlay} = useContext(ConfigContext)

  const [timer, setTimer] = useState<number | undefined>(undefined)
  const [nextTime, setNextTime] = useState<Time | undefined>(undefined)
  const [isPaused, setIsPaused] = useState(false)
  const [current, setCurrent] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (current !== undefined) {
      setTimer(session.times[current].time)
    } else {
      setTimer(undefined)
    }
    changeTheme(getThemeForCurrentTime())
  }, [current])

  useEffect(() => {
    if (timer !== undefined && !isPaused) {
      if (timer === -1) {
        endCurrent()
      } else {
        const timeout = setTimeout(() => {
          setTimer(timer - 1)
        }, 1000)
        return () => {
          clearTimeout(timeout)
        }
      }
    }
  }, [timer, isPaused])

  const start = () => {
    next()
  }

  const pauseResume = () => {
    setIsPaused(!isPaused)
  }

  const stop = () => {
    setNextTime(undefined)
    setIsPaused(false)
    setCurrent(undefined)
  }

  const next = () => {
    setIsPaused(false)
    if (current === undefined) {
      setNextTime(session.times[1])
      setCurrent(0)
    } else {
      const newCurrent = current + 1
      if (session.times[newCurrent] !== undefined) {
        setNextTime(session.times[newCurrent + 1])
        setCurrent(newCurrent)
      } else {
        sessionCompleted()
      }
    }
  }

  const endCurrent = () => {
    setTimer(undefined)
    if (autoPlay) {
      next()
    }
  }

  const getThemeForCurrentTime = (): string => {
    if (current === undefined) return GREEN
    switch (session.times[current].type) {
      case TimeType.FOCUS:
        return BURDGUNDY
      case TimeType.INTERVAL:
        return PURPLE
      case TimeType.BIG_INTERVAL:
        return PINK
      default:
        return GREEN
    }
  }

  const sessionCompleted = () => {
    setTimer(undefined)
    setNextTime(undefined)
    setIsPaused(false)
    setCurrent(undefined)
  }

  const controlDefaultOptions = {
    width: 28,
    height: 28,
    fill: theme.colors.highContrast,
  }

  const {primary: primaryText, secondary: secondaryText} = getTexts()
  return (
    <Container>
      <BrandContainer>
        <Brand color={theme.colors.highContrast} width="50" height="56" />
      </BrandContainer>
      <MainText>{primaryText}</MainText>
      <SecondaryText>{secondaryText}</SecondaryText>
      <Progress
        timer={timer}
        paused={isPaused}
        total={totalSteps}
        current={current}
        nextTime={nextTime}
        startFn={start}
        completedFn={sessionCompleted}
      />

      {timer !== undefined && (
        <Controls>
          <Control>
            <FaPause onPress={pauseResume} {...controlDefaultOptions} />
          </Control>
          <Control>
            <FaStop onPress={stop} {...controlDefaultOptions} />
          </Control>
          <Control>
            <FaStepForward onPress={next} {...controlDefaultOptions} />
          </Control>
        </Controls>
      )}
    </Container>
  )
}

export default Pomodoro
