import {TextInput} from "react-native";
import {styles} from "./input.styles";

type InputProps = {
    value: string,
    onChange: (textInput: string) => void,
}

export const Input = ({value, onChange}: InputProps) => (
    <TextInput
        style={styles.input}
        blurOnSubmit
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType={'numeric'}
        maxLength={2}
        value={value}
        onChangeText={onChange}
    />
)
