import styled from 'styled-components/native'
import { Text } from '../../styles/global'
import theme from '../../styles/theme'

export const Container = styled.SafeAreaView`
  align-items: center;
  background: ${theme.colors.pallete4};
  flex: 1;
  flex-direction: column;
  padding: 50px;
`

const TextDefault = styled(Text)`
  color: ${theme.colors.pallete3};
`

export const Title = styled(TextDefault)`
  font-size: 36px;
  margin-bottom: 55px;
  text-align: center;
`

export const BottomRow = styled.SafeAreaView`
  flex-direction: row;
`
export const FocussedTime = styled.SafeAreaView`
  flex-direction: row;
`

export const TimeText = styled.SafeAreaView`
  padding-left: 14px;
`
export const Time = styled(TextDefault)`
  font-weight: 700;
`
export const TimeTextLabel = styled(TextDefault)`
  font-weight: 100;
`

export const StatsButton = styled.TouchableOpacity`
  margin-left: 40px;
`
