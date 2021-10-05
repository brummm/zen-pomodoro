import React, {FC} from 'react'
import {getMonthName} from '../../lib/Date'
import {Day, Days, DayText, FreeSpace, MonthControls, MonthName} from './styles'

interface Props {
  month: number
  year: number
}
export const Calendar: FC<Props> = ({month, year}) => {
  const firstOfTheMonth = new Date(year, month, 1)
  const initialFreeSpace = new Array(firstOfTheMonth.getDay())
  const days = [1, 2, 3]
  const monthName = getMonthName(month)

  return (
    <>
      <MonthControls>
        <MonthName>{monthName}</MonthName>
      </MonthControls>
      <Days>
        {initialFreeSpace.map(() => {
          ;<FreeSpace />
        })}
        {days.map((day, key) => (
          <Day>
            <DayText>{day}</DayText>
          </Day>
        ))}
      </Days>
    </>
  )
}
