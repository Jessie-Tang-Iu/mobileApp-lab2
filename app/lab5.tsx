import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';


export default function lab5() {

    return(
        <View style={styles.container}>
            <Text>This is Lab 5</Text>
        </View>
    )
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
  }
})