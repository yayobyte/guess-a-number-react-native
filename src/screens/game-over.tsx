import React from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { styles } from './game-over.styles';
import { Number } from '../components/Number/number';
import { Theme } from '../theme/theme';
import { PageTitle } from '../components/page-title/page-title';
import { BodyText } from '../components/body-text/body-text';

type GameOverProps = {
    rounds: number,
    userNumber: number,
    startOverHandler: () => void,
}

export const GameOver = ({ rounds, userNumber, startOverHandler }: GameOverProps) => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <PageTitle title={'Game Over'} />
                <View style={styles.imagesContainer}>
                    <Image source={require('../assets/img/success.png')} style={styles.background} resizeMode={'cover'} />
                </View>
                <View style={styles.roundsContainer}>
                    <BodyText>Number of attemps</BodyText>
                    <Text style={styles.rounds}>{rounds}</Text>
                </View>
                <View style={styles.numberSelected}>
                    <BodyText>The number selected was</BodyText>
                    <Number number={userNumber} />
                </View>
                <View style={styles.button}>
                    <Button title={'Start Again'} onPress={startOverHandler} color={Theme.colors.primary}/>
                </View>
            </View>
        </ScrollView>
    )
}
