"use client";

import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Increment from '../component/increment';
import DecrementButton from '../component/decrement';


export default function Lab3() {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text>This is lab3</Text>
            <Text>Count: {count}</Text>
            <Increment count={count} setCount={setCount} />
            <DecrementButton count={count} setCount={setCount} />
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