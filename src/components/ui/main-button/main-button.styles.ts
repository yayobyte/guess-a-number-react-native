import {StyleSheet} from "react-native";
import {Theme} from "../../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    primary: {
        color: Theme.colors.primary,
        fontFamily: Theme.fontFamily.openSans,
        fontSize: Theme.fontSize.paragraph,
    },
    secondary: {
        color: Theme.colors.accent,
        fontFamily: Theme.fontFamily.openSans,
        fontSize: Theme.fontSize.paragraph,
    }
})
