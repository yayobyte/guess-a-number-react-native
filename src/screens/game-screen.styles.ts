import {Dimensions, StyleSheet} from 'react-native';
import { Theme } from '../theme/theme';

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
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
        width: 200,
        marginBottom: 32,
    },
    container: {
        marginTop: 26,
        alignItems: 'center',
        justifyContent: 'center',
    },
    attemptsContainer: {
        display: Dimensions.get('window').width < 360 ? 'none' : 'flex',
        marginVertical: 36,
        alignItems: 'center',
    },
    attempts: {
        fontSize: Theme.fontSize.header,
        color: Theme.colors.primary,
        fontFamily: Theme.fontFamily.openSans,
    }
})
