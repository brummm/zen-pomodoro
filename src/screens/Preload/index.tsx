import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import Brand from '../../assets/Brand.svg'
import { useTheme } from '../../hooks/theme'
import { Container, LoadingIcon } from '../../styles/global'
import { TextPadded } from './styles'

export const Preload: React.FC = () => {
  const navigation = useNavigation()
  const { theme } = useTheme()

  useEffect(() => {
    navigation.reset({
      routes: [{name: 'MainTab'}],
    })
  }, [])

  return (
    <Container>
      <Brand width="100%" height="100" />
      <TextPadded>Zen Pomodoro Timer</TextPadded>
      <LoadingIcon size="large" color={theme.colors.highContrast} />
    </Container>
  )
}

export default Preload
