import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployeeList from '../components/EmployeeList';
import AddEmployee from '../components/AddEmployee';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="EmployeeList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="EmployeeList" component={EmployeeList} />
      <Stack.Screen name="AddEmployee" component={AddEmployee} />
    </Stack.Navigator>
  );
};

export default AppStack;
