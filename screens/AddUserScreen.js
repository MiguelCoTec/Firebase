// screens/AddUserScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function AddUserScreen({ navigation }) {
  const [name, setName] = useState('');

  const handleAddUser = async () => {
    if (name.trim()) {
      try {
        await firestore().collection('users').add({ name });
        console.log(`Usuario agregado: ${name}`);
        navigation.goBack();
      } catch (error) {
        console.error('Error al agregar usuario:', error);
      }
    } else {
      console.log('El nombre no puede estar vacío');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del Usuario:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el nombre"
        value={name}
        onChangeText={setName}
      />
      <Button title="Guardar Usuario" onPress={handleAddUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});

