import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const fruitList = [
    {id: 1, name: "apple"},
    {id: 2, name: "mango"}, 
    {id: 3, name: "orange"},
]

const Fruits = () => {
    const router = useRouter();

    return (
        <View style={{ padding: 20 }}>
            {fruitList.map((fruit) => (
            <TouchableOpacity style={styles.button}
                key={fruit.id}
                onPress={() => router.push(`../${fruit.name}`)}>
                <Text>
                {fruit.name}
                </Text>
            </TouchableOpacity>
            ))}
        </View>
    );

}

const styles = StyleSheet.create({
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

export default Fruits;