// screens/UserListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function UserListScreen({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore().collection('users').onSnapshot((querySnapshot) => {
      const usersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('UserDetails', { userId: item.id })}>
            <Text style={{ fontSize: 18, marginVertical: 10 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Agregar Usuario" onPress={() => navigation.navigate('AddUser')} />
    </View>
  );
}

