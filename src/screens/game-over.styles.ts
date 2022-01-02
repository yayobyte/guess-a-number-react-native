import { StyleSheet } from 'react-native';
import { Theme } from '../theme/theme';

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        fontFamily: Theme.fontFamily.openSans,
    },
    numberSelected: {
        alignItems: 'center',
        marginTop: 24
    },
    primary: {
        marginTop: 24,
        flex: 1,
        alignItems: 'center',
    },
    imagesContainer: {
        borderRadius: 12,
        borderWidth: 3,
        borderColor: Theme.colors.primary,
        width: '80%',
        height: 300,
        marginBottom: 26,
        overflow: 'hidden',
    },
    background: {
        width: '100%',
        height: '100%',
    }
})
