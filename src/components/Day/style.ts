import styled from 'styled-components/native'
import { TextMedium } from '../../styles/global'
import theme from '../../styles/themes'

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
  color: ${props => props.theme.colors.highContrast };
  text-align: center;
`