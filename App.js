import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>馬子翔</Text>
      <View style={styles.content}>
        <Text style={styles.item}>英文名字：Charlie Ma</Text>
        <Text style={styles.item}>學號：111119019</Text>
        <Text style={styles.item}>學校：國立台北教育大學</Text>
        <Text style={styles.item}>科系：數位科技設計系</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    margin: 10,
  },
  item: {
    fontSize: 16,
    textAlign: 'center',
  },
});
