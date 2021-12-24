import {TextInput} from "react-native";
import {styles} from "./input.styles";

export const Input = () => (
    <TextInput style={styles.input} blurOnSubmit autoCapitalize={'none'} autoCorrect={false} keyboardType={'number-pad'} />
)
