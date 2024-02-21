import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color:'blue', textAlign: 'right'}}>Nicolas Schiavinato</Text>
      <Text style={[styles.text, { fontSize: 25, border: 'solid', borderWidth: 1, borderColor: 'black', textAlign: 'left', fontStyle: 'italic'}]}>Número 29</Text>
      <Text style={{ backgroundColor: 'pink', fontSize: 20, textAlign: 'center'}}>Sala 7</Text>
      <Text style={{ backgroundColor: 'red', fontSize: 20, textAlign: 'center', border: 'solid', borderWidth: 1, borderColor: 'black',}}>I love horses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
  
  }
});
