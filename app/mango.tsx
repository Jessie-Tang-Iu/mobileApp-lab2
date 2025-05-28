import { Stack } from 'expo-router';
import { Text, View, Pressable, Image } from 'react-native';

export default function Apple() {
  const router = Stack();

  return (
    <View>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/500px-Mangos_-_single_and_halved.jpg' }}
          style={{ width: 100, height: 100 }}
        />
      <Text>Welcome to the Mango page!</Text>
      <Pressable onPress={() => router.push('/')}>
        <Text style={{ color: 'blue', fontSize: 18 }}>Go to Home</Text>
      </Pressable>
    </View>
  );
}