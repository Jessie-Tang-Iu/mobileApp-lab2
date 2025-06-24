import { StyleSheet, Text, View } from 'react-native';
import vacationsDestinationsList from '../lib/vacationsDestinations';
import { useEffect, useState } from 'react';


export default function lab4() {

  const [vacationsDestinations, setVacationsDestinations] = useState([]);

  useEffect( () => {} , []);

    return(
        <View style={styles.container}>
            <Text>Lab 4</Text>
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