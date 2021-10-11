import React, {FC} from 'react'
import {fillWithZeroesIfLesserThanTen} from '../../lib/Date'
import {DayButton, DayText} from './style'

interface Props {
  day: number
  onPress?: (day: number) => void
}
const Day: FC<Props> = ({day, onPress}: Props) => {
  const dayText = fillWithZeroesIfLesserThanTen(day)
  const handlePress = () => {
      if (onPress) {
        onPress(day)
      }
  }
  return (
    <DayButton disabled={onPress === undefined} onPress={handlePress}>
      {day !== null && (
          <DayText>{dayText}</DayText>
      )}
    </DayButton>
  )
}

export default Day
