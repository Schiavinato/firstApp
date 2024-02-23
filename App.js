import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
return (
<View style={styles.container}>
<View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
</View>
<Text style={{fontSize:30,}}>Login</Text>
<TextInput style={{height:50, width:100, border: 'solid', borderWidth:1, borderColor: 'black'}}
placeholder='email'
inputMode='email'
color='black'
/>

<TextInput style={{height:50, width:100, border: 'solid', borderWidth:1, borderColor: 'black'}}
placeholder='senha'
inputMode='none'
secureTextEntry={true}
color='black'
/>
<Button style={styles.btn}
onPress={click}
title="Entrar"
color="black"
/>

</View>
)};

const styles = StyleSheet.create({
container: {
flex: 1,
},
secondaryContainer: {
flex: 1,
width: '100%',
backgroundColor: '#fff',
justifyContent: 'center',
},
});


