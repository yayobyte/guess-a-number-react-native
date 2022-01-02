import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme';

export const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        marginVertical: 24,
        padding: 10,
        borderRadius: 10,
        borderColor: Theme.colors.accent,
    },
    text: {
        fontSize: Theme.fontSize.header,
        fontFamily: Theme.fontFamily.openSansBold,
        color: Theme.colors.accent,
    }
})
