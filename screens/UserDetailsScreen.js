// screens/UserDetailsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function UserDetailsScreen({ route }) {
  const { userId } = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userDoc = await firestore().collection('users').doc(userId).get();
      if (userDoc.exists) {
        setUser(userDoc.data());
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Detalles del Usuario</Text>
      {user ? (
        <>
          <Text style={styles.text}>Nombre: {user.name}</Text>
        </>
      ) : (
        <Text style={styles.text}>Cargando...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
