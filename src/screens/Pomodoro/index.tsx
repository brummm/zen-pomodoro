import React from 'react'
import CircularProgress from '../../components/CircularProgress'
import { Container } from '../../styles/global'

export const Pomodoro: React.FC = () => {
    return (
        <Container>
            <CircularProgress progress="50" />
        </Container>
    )
}

export default Pomodoro
