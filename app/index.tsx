import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Fruits from '../component/fruits';

export default function Index() {

    const eventHandler = () => {
        alert("I am done with the lab.");
    }

  return (
    <View style={styles.container}>
      <Text>Welcome to our lab2!</Text>
      <Fruits />
      <Pressable onPress={eventHandler} style={styles.button}><Text>Finish Alert</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#008CBA',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    fontSize: 16,
    marginTop: 20,
  },
});
