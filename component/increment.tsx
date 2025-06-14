import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface IncrementProps {
 count: number,
 setCount: (count: number)=> void
}

export default function Increment( props: IncrementProps ) {

    const incrementHandler = () => {
      const value = props.count + 1
        props.setCount(value);
    }

    return(
        <View>
            <TouchableOpacity style={styles.button}
             onPress={incrementHandler}>
                <Text>increment</Text>
            </TouchableOpacity>
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