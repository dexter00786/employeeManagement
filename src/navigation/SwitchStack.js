import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {useSelector} from 'react-redux';

const SwitchStack = () => {
  const Stack = createNativeStackNavigator();
  const employees = useSelector(state => {
    return state.addEmployeeReducer.employees;
  });
  console.log(employees, '####employees');
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{headerShown: false}}>
        {employees.length === 0 ? (
          <Stack.Screen name="Authstack" component={AuthStack} />
        ) : (
          <Stack.Screen name="Appstack" component={AppStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SwitchStack;
