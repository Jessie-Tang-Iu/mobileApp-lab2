import React, { use } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';

const fruitList = [
    {id: 1, name: "apple"},
    {id: 2, name: "mango"}, 
    {id: 3, name: "orange"}]

const router = Stack();

const Fruits = () => 
    fruitList.map((fruit) => 
    <TouchableOpacity 
        key={fruit.id}
        onPress={() => router.push(`/${fruit.name}`)}>
        <Text style={{ fontSize: 20, margin: 10 }}>
            {fruit.name}
        </Text>
    </TouchableOpacity>);
        

export default Fruits;