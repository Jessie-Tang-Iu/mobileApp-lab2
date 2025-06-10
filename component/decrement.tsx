"use client";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ButtonProps {
    count: number;
    setCount: (count: number) => void;
}

const DecrementButton = (props: ButtonProps) => {

    const decrementHandler = () => {
        const value = props.count - 1
        props.setCount(value);
    }

    return (
        <TouchableOpacity style={styles.button} onPress={decrementHandler}>
            <Text>Decrement</Text>
        </TouchableOpacity>
    );
};

export default DecrementButton;

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