import { Text } from 'react-native';
import { styles } from './body-text.style';

type BodyTextProps = {
    children: string,
}

export const BodyText = ({ children }: BodyTextProps) => (
    <Text style={styles.container}>{children}</Text>
)
