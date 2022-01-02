import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {BodyText} from '../components/ui/body-text/body-text';
import {Card} from '../components/ui/card/card';
import {Number} from '../components/number/number';
import {PageTitle} from '../components/ui/page-title/page-title';
import {generateRandomBetween} from '../utils/generate-random-between';
import {styles} from './game-screen.styles';
import {MainButton} from '../components/ui/main-button/main-button';

type GameScreenProps = {
    userChoice: number,
    onGameOverHandler: (rounds: number) => void,
}

enum Direction {
    'lower',
    'greater'
}

const initialLow = 1;
const initialHigh = 100;

export const GameScreen = ({ userChoice, onGameOverHandler }: GameScreenProps) => {
    const randomNumber = generateRandomBetween(initialLow, initialHigh, userChoice);

    const [currentGuess, setCurrentGuess] = useState(randomNumber)
    const [currentLow, setCurrentLow] = useState(initialLow);
    const [currentHigh, setCurrentHigh] = useState(initialHigh)
    const [rounds, setRounds] = useState(0);

    const nextGuessHandler = (direction: Direction) => {
        const isMistakenClickLower = (currentGuess < userChoice) && direction === Direction.lower;
        const isMistakenClickGreater = (currentGuess > userChoice) && direction === Direction.greater;
        if( isMistakenClickGreater || isMistakenClickLower ){
            Alert.alert('Please do not lie!', 'You know this option is wrong', [{ text: 'Sorry!', style: 'cancel'}])
            return;
        }
        if(direction === Direction.lower) {
            const newRandomNumber = generateRandomBetween(currentLow, currentGuess, userChoice);
            setCurrentGuess(newRandomNumber);
            setCurrentHigh(currentGuess);
        }
        if(direction === Direction.greater) {
            const newRandomNumber = generateRandomBetween(currentGuess, currentHigh, userChoice);
            setCurrentGuess(newRandomNumber);
            setCurrentLow(currentGuess);
        }
        setRounds(prev => prev + 1);
    }

    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOverHandler(rounds)
        }
    }, [currentGuess, userChoice])

    return (
        <View style={styles.screen}>
            <PageTitle title={'Opponent\'s Guess'} />
            <Number number={currentGuess} />
            <View style={styles.cardContainer}>
                <Card>
                        <View style={styles.buttonContainer}>
                            <MainButton title={'Lower'} onPress={() => nextGuessHandler(Direction.lower)}/>
                            <MainButton title={'Greater'} onPress={() => nextGuessHandler(Direction.greater)}/>
                        </View>
                </Card>
            </View>
            <View style={styles.attemptsContainer}>
                <BodyText>Number of attepmts</BodyText>
                <Text style={styles.attempts}>{rounds}</Text>
            </View>
        </View>
    )
}
