import {NativeSyntheticEvent, TextInput, TextInputChangeEventData} from "react-native";
import {styles} from "./input.styles";

type InputProps = {
    value: string,
    onChange: (textInput: string) => void,
}

export const Input = ({ value, onChange}: InputProps) => (
    <TextInput
        style={styles.input}
        blurOnSubmit
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType={'number-pad'}
        maxLength={2}
        value={value}
        onChangeText={onChange}
    />
)
