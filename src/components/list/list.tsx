import {ScrollView, View} from "react-native";
import {BodyText, BodyTextProps} from "../ui/body-text/body-text";
import {styles} from './list.styles';
import React from "react";

type ListProps = {
    list: Array<BodyTextProps['children']>,
}

export const List = ({ list }: ListProps) => (
    <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.container}>
            {list?.map((value, index) => (
                <View key={`key-item-${index}`} style={styles.view}>
                    <BodyText>{value}</BodyText>
                </View>
            ))}
        </ScrollView>
    </View>
)
