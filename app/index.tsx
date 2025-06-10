import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.push(`../lab2`)}>
        <Text>
        Lab 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push(`../lab3`)}>
        <Text>
        Lab 3
        </Text>
      </TouchableOpacity>
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
