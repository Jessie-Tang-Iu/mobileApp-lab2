import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import vacationsDestinations, { VacationDestination } from '../lib/vacationsDestinations';
import { useEffect, useState } from 'react';
import ApiCallCity from '../component/api_call_city';


export default function lab4() {

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setSelectedId(prevId => (prevId === id ? null : id));
  };

  const renderItem = ({ item }: { item: VacationDestination }) => (
    <View>
      <TouchableOpacity onPress={() => toggleDetails(item.id)} style={styles.button}>
        <Text style={styles.title}>{item.location}</Text>
        
      </TouchableOpacity>
      {selectedId === item.id && (
        <View style={styles.details}>
          <ApiCallCity city={item.location} />
          <Text>Price: ${item.price}</Text>
          <Text>Average Yearly Temperature: {item.average_yearly_temperature}</Text>
        </View>
      )}
    </View>
  );

  useEffect( () => {} , []);

    return(
        <View style={styles.container}>
            <Text>Lab 4</Text>
            <FlatList
              data={vacationsDestinations}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              extraData={selectedId}
            />
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
  title: { 
    fontSize: 18 
  },
  details: { 
    padding: 10, 
    width: "100%",
    backgroundColor: '#ddd', 
    borderRadius: 5, 
    marginBottom: 10 
  },
});