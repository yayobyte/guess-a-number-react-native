import {
    View,
    Text,
    Button,
    NativeSyntheticEvent,
    Keyboard,
    TextInputChangeEventData,
    TouchableWithoutFeedback,
    Alert
} from "react-native";
import {styles} from "./start-game-screen.styles";
import {Card} from "../components/card/card";
import {Number} from '../components/Number/number';
import {Theme} from '../theme/theme'
import {Input} from "../components/input/input";
import {useState} from "react";
import React from "react";
import { PageTitle } from "../components/page-title/page-title";
import { BodyText } from "../components/body-text/body-text";

type StartGameScreenProps = {
    setUserNumber: (userSelection: number) => void,
}

export const StartGameScreen = ({ setUserNumber }: StartGameScreenProps) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState<number>()

    const onHandleChange = (inputText: string) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
    const onResetHandler = () => {
        setEnteredValue('');
        setIsConfirmed(false);
    }

    const onConfirmHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (!chosenNumber) {
            Alert.alert(
                'Invalid',
                'Number has to bve a 2 digit NUmber',
                [{ text: 'Ok', style: 'destructive', onPress: onResetHandler }])
            return
        }
        setIsConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber)
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <PageTitle title={'Start a New Game!'} />
                <Card>
                    <BodyText>Select a Number</BodyText>
                    <Input value={enteredValue} onChange={onHandleChange}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title={'Reset'} onPress={onResetHandler} color={Theme.colors.accent}/>
                        </View>
                        <View style={styles.button}>
                            <Button title={'Confirm'} onPress={() => onConfirmHandler()} color={Theme.colors.primary}/>
                        </View>
                    </View>
                </Card>
                {isConfirmed && selectedNumber && (
                    <View style={styles.confirmationBox}>
                        <Card>
                            <BodyText>You Selected</BodyText>
                            <Number number={selectedNumber} />
                            <Button title={'START GAME'} onPress={() => setUserNumber(selectedNumber)} color={Theme.colors.primary}/>
                        </Card>
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}
