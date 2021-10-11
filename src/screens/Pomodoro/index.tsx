import React, {useEffect, useRef, useState} from 'react'
import Brand from '../../assets/Brand.svg'
import CircularProgress from '../../components/CircularProgress'
import {Container} from '../../styles/global'
import theme from '../../styles/theme'
import {BrandContainer, Control, Controls, MainText, SecondaryText} from './styles'
import FaStop from '../../assets/icons/FaStop.svg'
import FaPause from '../../assets/icons/FaPause.svg'
import FaStepForward from '../../assets/icons/FaStepForward.svg'
import {Session} from '../../models/Session'
import {Time, TimeType} from '../../models/Time'

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
    {completed: false, time: 60 * 25, type: TimeType.FOCUS},
    {completed: false, time: 60 * 5, type: TimeType.INTERVAL},

    {completed: false, time: 60 * 25, type: TimeType.FOCUS},
    {completed: false, time: 60 * 5, type: TimeType.INTERVAL},

    {completed: false, time: 60 * 25, type: TimeType.FOCUS},
    {completed: false, time: 60 * 5, type: TimeType.INTERVAL},

    {completed: false, time: 60 * 25, type: TimeType.FOCUS},
    {completed: false, time: 60 * 15, type: TimeType.BIG_INTERVAL},
  ],
}
const totalSteps = 4

const controlDefaultOptions = {
  width: 28,
  height: 28,
  fill: theme.colors.palleteHighConstrast,
}

export const Pomodoro: React.FC = () => {
  const [timer, setTimer] = useState<number | undefined>(undefined)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const myTimeout = useRef<any>(null)

  useEffect(() => {
    if (isPlaying && !isPaused) {
      myTimeout.current = setTimeout(() => {
        let _timer = timer || getTimeFromCurrentSession()
        _timer--
        setProgress(_timer ? _timer / getTimeFromCurrentSession() : 0)
        setTimer(_timer)
        if (_timer === 0) {
          setIsPlaying(false)
        }
      }, 1000)
      return () => {
        clearTimeout(myTimeout.current)
      }
    }
  })

  const getTimeFromCurrentSession = () => {
    return session.times[current].time
  }

  const start = (time?: Time) => {
    setProgress(1)
    setTimer(time?.time || getTimeFromCurrentSession())
    setIsPlaying(true)
  }

  const stop = () => {
    setTimer(undefined)
    setProgress(0)
    setCurrent(0)
    setIsPlaying(false)
    setIsPaused(false)
  }

  const pauseResume = () => {
    setIsPaused(!isPaused)
  }

  const endTime = (index: number) => {
    session.times[index].completed = true
  }

  const next = () => {
    const newCurrent = current + 1
    if (session.times[newCurrent] !== undefined) {
      setCurrent(newCurrent)
      start(session.times[newCurrent])
    }
  }

  const timeCompleted = () => {
    endTime(current)
    next()
  }

  const {primary: primaryText, secondary: secondaryText} = getTexts()
  return (
    <Container>
      <BrandContainer>
        <Brand color={theme.colors.palleteHighConstrast} width="50" height="56" />
      </BrandContainer>
      <MainText>{primaryText} {current}</MainText>
      <SecondaryText>{secondaryText}</SecondaryText>
      <CircularProgress
        progress={progress}
        timer={timer}
        paused={isPaused}
        total={totalSteps}
        current={current}
        startFn={start}
        completedFn={timeCompleted}
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
