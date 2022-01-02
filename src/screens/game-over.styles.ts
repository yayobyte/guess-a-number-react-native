import { StyleSheet } from 'react-native';
import { Theme } from '../theme/theme';

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        marginVertical: 20,
    },
    roundsContainer: {
        alignItems: 'center'
    },
    rounds: {
        fontSize: 36,
        color: Theme.colors.primary,
    },
    numberSelected: {
        alignItems: 'center',
        marginTop: 24
    },
    button: {
        marginTop: 56,
        flex: 1,
        alignItems: 'center',
    }
})
