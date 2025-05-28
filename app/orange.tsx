import { Stack } from 'expo-router';
import { Text, View, Pressable, Image } from 'react-native';

export default function Apple() {
  const router = Stack();

  return (
    <View>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct4QnA6zwU4tyn9vq_ADJ8Ey6RfIWK-6V6g&s' }}
          style={{ width: 100, height: 100 }}
        />
      <Text>Welcome to the Orange page!</Text>
      <Pressable onPress={() => router.push('/')}>
        <Text style={{ color: 'blue', fontSize: 18 }}>Go to Home</Text>
      </Pressable>
    </View>
  );
}