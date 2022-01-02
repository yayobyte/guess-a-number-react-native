import React from "react"
import { View, Text } from "react-native"
import { styles } from "./number.styles"

type NumberProps = {
    number: number
}

export const Number = ({ number }: NumberProps) => (
    <View style={styles.container}>
        <Text style={styles.text}>{number}</Text>
    </View>
)
