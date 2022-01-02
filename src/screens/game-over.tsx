import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from './game-over.styles';
import {Number} from '../components/number/number';
import {PageTitle} from '../components/ui/page-title/page-title';
import {BodyText} from '../components/ui/body-text/body-text';
import {MainButton} from '../components/ui/main-button/main-button';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Theme} from "../theme/theme";

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
                <View style={styles.primary}>
                    <MainButton
                        title={'Start Again'}
                        onPress={startOverHandler}
                        icon={<MaterialCommunityIcons name={'play-circle-outline'} size={Theme.fontSize.paragraph} />}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
