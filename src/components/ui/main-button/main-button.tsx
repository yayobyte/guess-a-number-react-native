import {Platform, Text, TouchableOpacity, TouchableNativeFeedback, View} from "react-native";
import { Theme } from "../../../theme/theme";
import {styles} from "./main-button.styles";
import { OS } from '../../../types/general';

interface ButtonProps {
    title?: string,
    onPress: () => void,
    icon?: JSX.Element,
}

interface BasicButtonProps extends ButtonProps {
    color: typeof Theme.colors.primary | typeof Theme.colors.accent,
}

const BasicButton = ({ title, onPress, icon, color }: BasicButtonProps) => {
    const Button = (props: any) => Platform.OS === OS.ios ? <TouchableOpacity {...props}/> : <TouchableNativeFeedback {...props}/>
    return (
        <Button onPress={onPress} activeOpacity={0.5}>
            <View style={{...styles.container, borderColor: color}}>
                <Text style={{...styles.buttonFont, color}}>{icon}{icon && title && ' '}{title}</Text>
            </View>
        </Button>
    )
}

export const MainButton = ({ title, onPress, icon }: ButtonProps) => (
    <BasicButton onPress={onPress} title={title} color={Theme.colors.primary} icon={icon}/>
)

export const SecondaryButton = ({ title, onPress, icon }: ButtonProps) => (
    <BasicButton title={title} onPress={onPress} color={Theme.colors.accent} icon={icon}/>
)
