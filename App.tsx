import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Header} from "./src/components/header/header";
import {StartGameScreen} from "./src/screens/start-game-screen";
import { GameScreen } from './src/screens/game-screen';
import { GameOver } from './src/screens/game-over';

export default function App() {
    const [userNumber, setUserNumber] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [rounds, setRounds] = useState(0);

    const startGameHandler = (userSelected: number) => {
        setUserNumber(userSelected);
    }
    const onGameOverHandler = (rounds: number) => {
        setIsGameOver(true);
        setRounds(rounds);
    }

    const startOverHandler = () => {
        setRounds(0);
        setIsGameOver(false);
        setUserNumber(0)
    }

    return (
        <View style={styles.screen}>
            <Header title={'Guess A Number'}/>
            {!userNumber && !isGameOver && <StartGameScreen setUserNumber={startGameHandler}/>}
            {userNumber !==0  && !isGameOver && <GameScreen userChoice={userNumber ?? 0} onGameOverHandler={onGameOverHandler}/>}
            {isGameOver && <GameOver rounds={rounds} userNumber={userNumber} startOverHandler={startOverHandler} />}
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});
