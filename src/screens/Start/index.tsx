import React from "react";
import { Text } from "react-native";
import CircularProgress from "../../components/CircularProgress";
import { Container } from "../../styles/global";

export const Start: React.FC = () => {
    return ( 
        <Container>
            <CircularProgress progress="50" />
            <Text>Start</Text>
        </Container>
    )
}

export default Start