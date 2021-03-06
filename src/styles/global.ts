import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  align-items: center;
  background: ${props => props.theme.colors.pallete3};
  color: ${props => props.theme.colors.text};
  flex: 1;
  justify-content: center;
  padding: 0 40px;
`
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`