import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, Alert } from 'react-native';
import { updateUser, getUserById } from '../lib/supabase_crud';
import { User } from '../lib/object_type';
import { useLocalSearchParams, useRouter } from 'expo-router';


export default function UpdateUser() {

    const { id, first_name, last_name, phone, email } = useLocalSearchParams();

    const [lastName, setLastName] = useState<string>(last_name as string);
    const [firstName, setFirstName] = useState<string>(first_name as string);
    const [phoneValue, setPhone] = useState<string>(phone as string);
    const [emailValue, setEmail] = useState<string>(email as string);

    const router = useRouter();

    const handleSubmit = async () => {
    try {

        const existingUser = await getUserById(Number(id));

        const updatedUser: User = {
        ...existingUser,
        first_name: firstName,
        last_name: lastName,
        phone: phoneValue,
        email: emailValue,
        };
    
        const updated = await updateUser(Number(id), updatedUser);
        Alert.alert('Success', `User ${updated[0].first_name} updated!`);
        router.push('../lab5');
    } catch (error) {
        Alert.alert('Error', 'Could not update user.');
        console.error(error);
    }
    };


    return(
        <View style={styles.container}>
            <Text>Add user here</Text>

            <Text style={styles.label}>Enter Last Name:</Text>
            <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
                placeholder="Type here"
                keyboardType="default"
            />
            <Text style={styles.label}>Enter First Name:</Text>
            <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
                placeholder="Type here"
                keyboardType="default"
            />
            <Text style={styles.label}>Enter Phone Number:</Text>
            <TextInput
                style={styles.input}
                value={phoneValue}
                onChangeText={setPhone}
                placeholder="Type here"
                keyboardType="default"
            />
            <Text style={styles.label}>Enter Email:</Text>
            <TextInput
                style={styles.input}
                value={emailValue}
                onChangeText={setEmail}
                placeholder="Type here"
                keyboardType="default"
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 12,
  }
})