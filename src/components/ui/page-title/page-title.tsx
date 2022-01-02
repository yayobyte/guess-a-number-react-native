import { Text } from 'react-native';
import { styles } from './page-title.styles';

type PageTitleProps = {
    title: string,
}

export const PageTitle = ({ title }: PageTitleProps) => (
    <Text style={styles.container}>{title}</Text>
)
