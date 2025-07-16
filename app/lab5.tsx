import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { deleteUser, updateUser } from '../lib/supabase_crud';

// Define a User type based on your Supabase "users" table
type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};

export default function Lab5() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase.from<User>('users').select('*');
    if (error) {
      console.error('Error fetching users:', error.message);
    } else {
      setUsers(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (userId: number, userName: string) => {
    Alert.alert(
      'Confirm Delete',
      `Are you sure you want to delete ${userName}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive', 
          onPress: async () => {
            try {
              await deleteUser(userId);
              fetchUsers();
            } catch (error) {
              Alert.alert('Error', 'Failed to delete user.');
              console.error(error);
            }
          } 
        }
      ]
    );
  };

  const handleUpdate = async (user: User) => {
    // Example inline update: append "(Updated)" to first_name
    try {
      await updateUser(user.id, { ...user, first_name: user.first_name + " (Updated)" });
      fetchUsers();
    } catch (error) {
      Alert.alert('Error', 'Failed to update user.');
      console.error(error);
    }
  };

  const renderUser = ({ item }: { item: User }) => (
    <View style={styles.userItem}>
      <Text>{item.first_name} {item.last_name} ({item.email})</Text>

      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <TouchableOpacity 
          style={[styles.smallButton, {backgroundColor: '#4CAF50'}]} 
          onPress={() => router.push({ pathname: '/UpdateUser', params: item })}
        >
          <Text style={styles.smallButtonText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.smallButton, {backgroundColor: '#f44336', marginLeft: 10}]} 
          onPress={() => handleDelete(item.id, `${item.first_name} ${item.last_name}`)}
        >
          <Text style={styles.smallButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Lab 5</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList<User>
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderUser}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={() => router.push('../addUser')}>
        <Text style={styles.buttonText}>Add User</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  userItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#008CBA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  smallButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 14,
  }
});
