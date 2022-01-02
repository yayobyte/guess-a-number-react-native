import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme';

export const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        marginVertical: 24,
        padding: 10,
        borderRadius: 10,
        borderColor: Theme.colors.accent,
        minWidth: 56,
        alignItems: 'center',
    },
    primary: {
        fontSize: Theme.fontSize.header,
        fontFamily: Theme.fontFamily.openSansBold,
        color: Theme.colors.accent,
    }
})
