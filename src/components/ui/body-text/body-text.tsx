import { Text } from 'react-native';
import { styles } from './body-text.style';

export type BodyTextProps = {
    children: string | number,
}

export const BodyText = ({ children }: BodyTextProps) => (
    <Text style={styles.container}>{children}</Text>
)
