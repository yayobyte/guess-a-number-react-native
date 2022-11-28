import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header} from "./src/components/ui/header/header";
import {StartGameScreen} from "./src/screens/start-game-screen";
import {GameScreen} from './src/screens/game-screen';
import {GameOver} from './src/screens/game-over';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Theme } from './src/theme/theme';
import {LinearGradient} from "expo-linear-gradient";

const fontsConfigurationObject = {
    [Theme.fontFamily.openSansBold]: require('./src/assets/fonts/OpenSans-Bold.ttf'),
    [Theme.fontFamily.openSans]: require('./src/assets/fonts/OpenSans-Regular.ttf'),
}

export default function App() {
    const [fontsLoaded] = useFonts(fontsConfigurationObject)

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

    if (!fontsLoaded) {
        return (
            <AppLoading />
        )
    }

    return (
        <LinearGradient colors={[Theme.colors.white, Theme.colors.lightRose]} style={{ flex: 1 }}>
            <SafeAreaView style={styles.screen}>
                <Header title={'Guess A Number'}/>
                {!userNumber && !isGameOver && <StartGameScreen setUserNumber={startGameHandler}/>}
                {userNumber !== 0 && !isGameOver &&
                <GameScreen userChoice={userNumber ?? 0} onGameOverHandler={onGameOverHandler}/>}
                {isGameOver && <GameOver rounds={rounds} userNumber={userNumber} startOverHandler={startOverHandler}/>}
                <StatusBar style="auto"/>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});
