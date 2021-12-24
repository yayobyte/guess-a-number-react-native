import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Header} from "./src/components/header/header";
import {StartGameScreen} from "./src/screens/start-game-screen";

export default function App() {
  return (
    <View style={styles.screen}>
        <Header title={'Guess A Number'} />
        <StartGameScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});
