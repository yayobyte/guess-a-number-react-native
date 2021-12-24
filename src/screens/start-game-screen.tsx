import {View, Text, Button} from "react-native";
import {styles} from "./start-game-screen.styles";
import {Card} from "../components/card/card";
import { Theme } from '../theme/theme'
import {Input} from "../components/input/input";

export const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen</Text>
            <Card>
                <Text>Select a Number</Text>
                <Input />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title={'Reset'} onPress={() => {}} color={Theme.colors.accent}/></View>
                    <View style={styles.button}><Button title={'Confirm'} onPress={() => {}} color={Theme.colors.primary}/></View>
                </View>
            </Card>
        </View>
    )
}
