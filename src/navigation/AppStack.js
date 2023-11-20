import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployeeList from '../components/EmployeeList';
import AddEmployee from '../components/AddEmployee';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../constants/Colors';
import {styles} from '../components/Styles';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const AppStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerMenu />}>
      <Drawer.Screen name="Home" component={DrawerStack} />
    </Drawer.Navigator>
  );
};

export const DrawerStack = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="EmployeeList" component={EmployeeList} />
      <Stack.Screen name="AddEmployee" component={AddEmployee} />
    </Stack.Navigator>
  );
};

export const DrawerMenu = () => {
  const [favCount, setFavCount] = useState(0);
  const employees = useSelector(state => {
    return state.addEmployeeReducer.employees;
  });
  const navigation = useNavigation();

  useEffect(() => {
    let count = 0;
    !!employees &&
      employees.map(emp => {
        if (emp.isFavourite === true) {
          count++;
        }
      });
    setFavCount(count);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 15}}>
        <View style={{alignItems: 'flex-end', paddingVertical: 15}}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.closeDrawer());
            }}>
            <Image
              source={require('../../assets/images/cancel.png')}
              style={styles.headerImages}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.drawerCard}>
          <Text>Total Employees</Text>
          {!!employees && employees.length > 0 ? (
            <Text>{employees.length}</Text>
          ) : (
            <Text>0</Text>
          )}
        </View>

        <View style={styles.drawerCard}>
          <Text>Total Favourites</Text>
          <Text>{favCount}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppStack;
