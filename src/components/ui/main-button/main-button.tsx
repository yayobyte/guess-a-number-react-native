import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./main-button.styles";

interface ButtonProps {
    title: string,
    onPress: () => void,
}

interface BasicButtonProps extends ButtonProps {
    textStyle: typeof styles.primary | typeof styles.secondary
}

const BasicButton = ({ title, onPress, textStyle }: BasicButtonProps) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Text style={textStyle}>{title}</Text>
        </View>
    </TouchableOpacity>
)

export const MainButton = ({ title, onPress }: ButtonProps) => (
    <BasicButton onPress={onPress} title={title} textStyle={styles.primary} />
)

export const SecondaryButton = ({ title, onPress }: ButtonProps) => (
    <BasicButton title={title} onPress={onPress} textStyle={styles.secondary} />
)
