import { Stack } from 'expo-router';
import { Text, View, Pressable, Image } from 'react-native';

export default function Apple() {
  const router = Stack();

  return (
    <View>
        <Image
          source={{ uri: 'https://static.libertyprim.com/files/varietes/pomme-akane-large.jpg?1569320193' }}
          style={{ width: 100, height: 100 }}
        />
      <Text>Welcome to the Apple page!</Text>
      <Pressable onPress={() => router.push('/')}>
        <Text style={{ color: 'blue', fontSize: 18 }}>Go to Home</Text>
      </Pressable>
    </View>
  );
}