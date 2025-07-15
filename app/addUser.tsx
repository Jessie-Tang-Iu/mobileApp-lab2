import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, Alert } from 'react-native';
import { createUser } from '../lib/supabase_crud';
import { User } from '../lib/object_type';
import { useRouter } from 'expo-router';


export default function addUser() {

    const [lastName, setLastName] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const router = useRouter();

    const handleSubmit = async () => {
        const user: User = {
            last_name: lastName,
            first_name: firstName,
            phone: phone,
            email: email
    };

    try {
        const createdUser = await createUser(user);
            Alert.alert('Success', `User ${createdUser.first_name} created!`);
            // Clear form
            setLastName('');
            setFirstName('');
            setPhone('');
            setEmail('');
            console.log("Creating user:", user);
            router.push(`../lab5`)
        } catch (error) {
            Alert.alert('Error', 'Could not create user. Please try again.');
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
                value={phone}
                onChangeText={setPhone}
                placeholder="Type here"
                keyboardType="default"
            />
            <Text style={styles.label}>Enter Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Type here"
                keyboardType="default"
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
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