import React, {useEffect, useRef, useState} from 'react'
import Brand from '../../assets/Brand.svg'
import CircularProgress from '../../components/CircularProgress'
import {Container} from '../../styles/global'
import theme from '../../styles/theme'
import {BrandContainer, Control, Controls, MainText, SecondaryText} from './styles'
import FaStop from '../../assets/icons/FaStop.svg'
import FaPause from '../../assets/icons/FaPause.svg'
import FaStepForward from '../../assets/icons/FaStepForward.svg'

const getTexts = () => {
  const primary = 'Zen Pomodoro Timer'
  const secondary = ''
  return {
    primary,
    secondary,
  }
}

const totalTime = 5
const totalSteps = 4

const controlDefaultOptions = {
  width: 28,
  height: 28,
  fill: theme.colors.palleteHighConstrast,
}

export const Pomodoro: React.FC = () => {
  const [timer, setTimer] = useState<number | undefined>(undefined)
  const [isPlaying, setIsPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const myTimeout = useRef<any>(null)

  useEffect(() => {
    if(isPlaying) {
      myTimeout.current = setTimeout(() => {
        let _timer = timer || totalTime
        _timer--
        setProgress(_timer ? _timer / totalTime : 0)
        setTimer(_timer)
        if (_timer === 0) {
          setIsPlaying(false)
        }
      }, 1000)
      return (() => {
        clearTimeout(myTimeout.current)
      })
    }
  })

  const start = () => {
    setProgress(1)
    setTimer(totalTime)
    setIsPlaying(true)
  }

  const stop = () => {
    setTimer(undefined)
    setProgress(0)
    setIsPlaying(false)
    // clearTimeout(myTimeout.current)
    // myTimeout.current = null
  }

  const pauseResume = () => {}

  const next = () => {}

  const {primary: primaryText, secondary: secondaryText} = getTexts()
  return (
    <Container>
      <BrandContainer>
        <Brand color={theme.colors.palleteHighConstrast} width="50" height="56" />
      </BrandContainer>
      <MainText>{primaryText}</MainText>
      <SecondaryText>{secondaryText}</SecondaryText>
      <CircularProgress progress={progress} timer={timer} total={totalSteps} current={current} startFn={start} />
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
