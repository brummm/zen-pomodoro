// as seen on https://www.youtube.com/watch?v=Y50CQfyFkGI&ab_channel=WilliamCandillon
import {View, Dimensions} from 'react-native'
import React from 'react'
import Svg, {Circle} from 'react-native-svg'
import {Value} from 'react-native-reanimated'
import theme from '../../styles/theme'
import {Container} from '../../styles/global'

const {width} = Dimensions.get('window')
const size = width - 32
const strokeWidth = 3
const radius = (size - strokeWidth) / 2
const circunference = radius * 2 * Math.PI

interface CircularProgressProps {
  progress: typeof Value
}
export const CircularProgress: React.FC<CircularProgressProps> = ({progress}: CircularProgressProps) => {
  return (
    // <Container>
      <Svg>
        <Circle
          stroke={theme.colors.palleteHighConstrast}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circunference} ${circunference}`}
          {...{strokeWidth}}
        />
      </Svg>
    // </Container>
  )
}

export default CircularProgress
