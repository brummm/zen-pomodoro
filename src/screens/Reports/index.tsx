import React from 'react'
import FaStopwatch from '../../assets/icons/FaStopwatch.svg'
import FaChartBar from '../../assets/icons/FaChartBar.svg'
import { Calendar } from '../../components/Calendar'
import theme from '../../styles/theme'
import { BottomRow, Container, FocussedTime, StatsButton, Time, TimeText, TimeTextLabel, Title } from './styles'

export const Reports: React.FC = () => {
  return (
    <Container>
      <Title>Usage Report</Title>
      <Calendar month={0} year={2021} />
      <BottomRow>
        <FocussedTime>
          <FaStopwatch width="24" height="24" fill={theme.colors.pallete3} />
          <TimeText>
            <Time>22 hours and 13 minutes</Time>
            <TimeTextLabel>focussed this month.</TimeTextLabel>
          </TimeText>
        </FocussedTime>
        <StatsButton>
            <FaChartBar width="24" height="24" fill={theme.colors.pallete3}  />
        </StatsButton>
      </BottomRow>
    </Container>
  )
}

export default Reports
