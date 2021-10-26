import React, { useContext, useEffect, useState } from 'react'
import FaChartBar from '../../assets/icons/FaChartBar.svg'
import FaStopwatch from '../../assets/icons/FaStopwatch.svg'
import { Calendar } from '../../components/Calendar'
import { useTheme } from '../../hooks/theme'
import { createSession } from '../../models/Session'
import { BottomRow, Container, FocussedTime, StatsButton, Time, TimeText, TimeTextLabel, Title } from './styles'

export const Reports: React.FC = () => {
  const { theme } = useTheme()
  const date = new Date()
  const [year, setYear] = useState(date.getFullYear())
  const [month, setMonth] = useState(date.getMonth())

  const session = createSession()

  const changeMonth = (amount: number) => {
    let finalMonth = month + amount
    if (finalMonth < 0) {
      setYear(year - 1)
      setMonth(11)
    } else if (finalMonth > 11) {
      setYear(year + 1)
      setMonth(0)
    } else {
      setMonth(finalMonth)
    }
  }
  
  return (
    <Container>
      <Title>Usage Report</Title>
      <Calendar month={month} year={year} changeMonth={changeMonth} />
      <BottomRow>
        <FocussedTime>
          <FaStopwatch width="24" height="24" fill={theme.colors.highContrast} />
          <TimeText>
            <Time>22 hours and 13 minutes</Time>
            <TimeTextLabel>focussed this month.</TimeTextLabel>
          </TimeText>
        </FocussedTime>
        <StatsButton>
            <FaChartBar width="24" height="24" fill={theme.colors.highContrast}  />
        </StatsButton>
      </BottomRow>
    </Container>
  )
}

export default Reports
