import { useRouter } from 'expo-router';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';

export default function Orange() {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct4QnA6zwU4tyn9vq_ADJ8Ey6RfIWK-6V6g&s' }}
          style={styles.image}
        />
      <Text>Welcome to the Orange page!</Text>
      <Pressable style={styles.button} onPress={() => router.push('/')}>
        <Text style={styles.text}>Go to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  image: {
    width: '100%',
    height: 300,
  },
  button: {
    width: 125,
    height: 40,
    backgroundColor: '#008CBA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  text: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});