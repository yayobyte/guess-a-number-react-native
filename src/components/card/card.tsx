import {View} from "react-native";
import {styles} from "./card.styles";

type CardProps = {
    children: JSX.Element[] | JSX.Element,
}

export const Card = ({ children }: CardProps) => {
    return (
        <View style={[styles.container]}>{ children }</View>
    )
}
