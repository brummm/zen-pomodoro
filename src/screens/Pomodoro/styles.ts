import styled from 'styled-components/native'
import {TextMedium, TextSmall} from '../../styles/global'

export const BrandContainer = styled.SafeAreaView`
  margin-bottom: 13px;
`

export const MainText = styled(TextMedium)`
  color: ${props => props.theme.colors.highContrast};
  margin-bottom: 5px;
`

export const SecondaryText = styled(TextSmall)`
  color: ${props => props.theme.colors.highContrast};
  margin-bottom: 30px;
`

export const Controls = styled.SafeAreaView`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 60px;
  width: 150px;
`
export const Control = styled.TouchableOpacity`
  flex-direction: row;
`
