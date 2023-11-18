import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LaunchScreen from '../components/LaunchScreen';
import AddEmployee from '../components/AddEmployee';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="LauncScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LauncScreen" component={LaunchScreen} />
      <Stack.Screen name="AddEmployee" component={AddEmployee} />
    </Stack.Navigator>
  );
};

export default AuthStack;
