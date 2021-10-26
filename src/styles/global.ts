import { RefAttributes } from 'react'
import { TextProps } from 'react-native'
import { ThemedStyledProps } from 'styled-components'
import styled, { DefaultTheme } from 'styled-components/native'

export const Container = styled.SafeAreaView`
  align-items: center;
  background: ${props => props.theme.colors.main};
  flex: 1;
  justify-content: center;
  padding: 0 40px;
`
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`

export const Textasdfasdf = styled.Text``
interface Props {
  textAlign?: string
}
export const Text = styled.Text<Props & ThemedStyledProps<TextProps & RefAttributes<Text>, DefaultTheme>>`
  font-family: 'Roboto-Light';
  font-weight: 100;
  text-align: ${props => props.textAlign || 'center'};
`

export const TextMedium = styled(Text)`
  font-size: 18px;
`
export const TextSmall = styled(Text)`
  font-size: 14px;
`

export const TextBig = styled(Text)`
  font-size: 36px;
`