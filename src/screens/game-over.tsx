import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './game-over.styles';
import { Number } from '../components/Number/number';
import { Theme } from '../theme/theme';

type GameOverProps = {
    rounds: number,
    userNumber: number,
    startOverHandler: () => void,
}

export const GameOver = ({ rounds, userNumber, startOverHandler }: GameOverProps) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.header}>Game Over</Text>
            <View style={styles.roundsContainer}>
                <Text>Number of attemps</Text>
                <Text style={styles.rounds}>{rounds}</Text>
            </View>
            <View style={styles.numberSelected}>
                <Text>The number selected was</Text>
                <Number number={userNumber} />
            </View>
            <View style={styles.button}>
                <Button title={'Start Again'} onPress={startOverHandler} color={Theme.colors.primary}/>
            </View>
        </View>
    )
}