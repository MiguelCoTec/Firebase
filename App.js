import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from './screens/UserListScreen';
import AddUserScreen from './screens/AddUserScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    // Configuración para iniciar sesión anónimamente al abrir la aplicación
    const authenticateUser = async () => {
      try {
        await auth().signInAnonymously();
      } catch (error) {
        console.error('Error de autenticación:', error);
      }
    };
    authenticateUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserListScreen} options={{ title: 'Lista de Usuarios' }} />
        <Stack.Screen name="AddUser" component={AddUserScreen} options={{ title: 'Agregar Usuario' }} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} options={{ title: 'Detalles del Usuario' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
