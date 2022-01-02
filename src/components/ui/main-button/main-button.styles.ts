import {StyleSheet} from "react-native";
import {Theme} from "../../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 6,
    },
    buttonFont: {
        fontFamily: Theme.fontFamily.openSans,
        fontSize: Theme.fontSize.paragraph,
    }
})
