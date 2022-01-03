import {StyleSheet} from "react-native";
import { Theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
    },
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    view: {
        alignItems: 'center',
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: Theme.colors.lightGray,
        width: '100%',
    },
})
