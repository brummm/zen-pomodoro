import styled from 'styled-components/native'
import { TextMedium } from '../../styles/global'
import theme from '../../styles/theme'

const daySpaceStyles = `
  padding: 10px 0;
  width: 14.28%;
`
const DaySpace = styled.SafeAreaView`
  ${daySpaceStyles}
`

export const EmptySpace = styled(DaySpace)``
export const DayButton = styled.TouchableOpacity`
  ${daySpaceStyles}
`
export const DayText = styled(TextMedium)`
  color: ${theme.colors.pallete3};
  text-align: center;
`