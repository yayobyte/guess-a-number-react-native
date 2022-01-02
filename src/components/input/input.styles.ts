import {StyleSheet} from "react-native";
import {Theme} from "../../theme/theme";


export const styles = StyleSheet.create({
    input: {
        marginVertical: 20,
        borderBottomColor: Theme.colors.primary,
        borderBottomWidth: 1,
        width: 50,
        height: 40,
        fontSize: Theme.fontSize.header,
        fontFamily: Theme.fontFamily.openSansBold,
        color: Theme.colors.primary,
        textAlign: 'center'
    },
})
