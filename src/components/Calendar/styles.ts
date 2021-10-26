import styled from 'styled-components/native'
import {TextMedium} from '../../styles/global'
import theme from '../../styles/themes'

export const Container = styled.SafeAreaView`
  flex: 1;
`
export const MonthControls = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Control = styled.TouchableOpacity`
  height: 28px;
  width: 28px;
`

export const ControlLeft = styled(Control)`
  align-items: flex-end;
  text-align: right;
`
export const MonthName = styled(TextMedium)`
  color: ${props => props.theme.colors.highContrast };
  text-align: center;
`
export const Days = styled.SafeAreaView`
  flex-wrap: wrap;
  flex-direction: row;
`





