import React from 'react';
import { View, Text } from 'react-native'
import {styles} from "./header.styles";

type HeaderProps = {
    title: string,
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

