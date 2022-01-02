import {Alert, Keyboard, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "./start-game-screen.styles";
import {Card} from "../components/ui/card/card";
import {Number} from '../components/number/number';
import {Input} from "../components/input/input";
import React, {useState} from "react";
import {PageTitle} from "../components/ui/page-title/page-title";
import {BodyText} from "../components/ui/body-text/body-text";
import {MainButton, SecondaryButton} from "../components/ui/main-button/main-button";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Theme} from "../theme/theme";

type StartGameScreenProps = {
    setUserNumber: (userSelection: number) => void,
}

export const StartGameScreen = ({setUserNumber}: StartGameScreenProps) => {
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
                [{text: 'Ok', style: 'destructive', onPress: onResetHandler}])
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
                <PageTitle title={'Start a New Game!'}/>
                <Card>
                    <BodyText>Input a 2 digit number</BodyText>
                    <Input value={enteredValue} onChange={onHandleChange}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.primary}>
                            <SecondaryButton
                                title={'Reset'}
                                onPress={onResetHandler}
                                icon={<MaterialCommunityIcons name={'restart'} size={Theme.fontSize.paragraph} />}
                            />
                        </View>
                        <View style={styles.primary}>
                            <MainButton
                                title={'Confirm'}
                                onPress={() => onConfirmHandler()}
                                icon={<MaterialCommunityIcons name={'check-outline'} size={Theme.fontSize.paragraph}/>}
                            />
                        </View>
                    </View>
                </Card>
                {isConfirmed && selectedNumber && (
                    <View style={styles.confirmationBox}>

                            <BodyText>You Selected</BodyText>
                            <Number number={selectedNumber}/>
                            <MainButton
                                title={'Start Game!'}
                                onPress={() => setUserNumber(selectedNumber)}
                                icon={<MaterialCommunityIcons name={'gamepad-up'} size={Theme.fontSize.paragraph} />}
                            />

                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}
