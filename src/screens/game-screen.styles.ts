import { StyleSheet } from 'react-native';
import { Theme } from '../theme/theme';

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        alignItems: 'center'
    },
    header: {
        fontSize: 20,
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        maxWidth: '80%',
        width: 300,
    },
    cardContainer: {
        marginTop: 26,
        alignItems: 'center',
        justifyContent: 'center',
    },
    attemptsContainer: {
        marginVertical: 36,
        alignItems: 'center'
    },
    attempts: {
        fontSize: 24,
        color: Theme.colors.primary,
    }
})
