import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomStatusBar from '../customComponent/CustomStatusBar';
import {colors} from '../constants/Colors';
import {styles} from './Styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  addEmployeeAction,
  modifyFavouriteAction,
} from '../store/actions/actions';
import {strings} from '../constants/strings';
import {sortByLastName, sortByName} from '../utils/validation';
import {
  DrawerActions,
  StackActions,
  useNavigation,
} from '@react-navigation/native';

const EmployeeList = () => {
  const [employeesList, setEmployeeList] = useState();
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const employees = useSelector(state => {
    return state.addEmployeeReducer.employees;
  });

  useEffect(() => {
    setEmployeeList(employees);
  }, []);

  const setFavourite = (item, index) => {
    const obj = {...item};
    if (!item.isFavourite) {
      obj.isFavourite = true;
    } else {
      obj.isFavourite = false;
    }
    const newArr = employeesList.slice();
    newArr[index] = obj;
    setEmployeeList(newArr);
    dispatch(modifyFavouriteAction(obj, index));
  };
  const Header = () => (
    <View style={styles.header}>
      <View style={styles.flexSide}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image
            source={require('../../assets/images/menu.png')}
            style={styles.headerImages}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.flexMiddle}>
        <Text style={styles.headerInbox}>{strings.INBOX}</Text>
      </View>
      <TouchableOpacity
        style={[styles.flexSide, {alignItems: 'flex-end'}]}
        onPress={() => setOpenFilter(true)}>
        <Image
          source={require('../../assets/images/dots.png')}
          style={styles.headerImages}
        />
      </TouchableOpacity>
    </View>
  );

  const Card = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.flexSide}>
          <View style={styles.avatar}>
            <Text style={styles.initials}>
              {item.firstName[0].toUpperCase()}
              {item.lastName[0].toUpperCase()}
            </Text>
          </View>
        </View>
        <View style={[styles.flexMiddle, {justifyContent: 'center'}]}>
          <Text style={styles.cardName}>
            {item.firstName} {item.lastName}
          </Text>
          <Text style={styles.cardDesignation}>{item.jobTitle}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.flexSide,
            {justifyContent: 'center', alignItems: 'center'},
          ]}
          onPress={() => setFavourite(item, index)}>
          {!!item.isFavourite ? (
            <Image
              source={require('../../assets/images/starfilled.png')}
              style={styles.headerImages}
            />
          ) : (
            <Image
              source={require('../../assets/images/starempty.png')}
              style={styles.headerImages}
            />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const FilterModal = () => (
    <Modal visible={true} transparent={true}>
      <SafeAreaView></SafeAreaView>
      <View style={styles.modalWrapper}>
        <View style={styles.filterContainer}>
          <View style={{marginBottom: 15, alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => setOpenFilter(false)}>
              <Image
                source={require('../../assets/images/cancel.png')}
                style={styles.headerImages}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.filterBtn, {marginBottom: 20}]}
            onPress={() => {
              const res = sortByName(employeesList);
              setEmployeeList(res);
              setOpenFilter(false);
            }}>
            <Text>{strings.SORT_FIRST_NAME}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => {
              const res = sortByLastName(employeesList);
              setEmployeeList(res);
              setOpenFilter(false);
            }}>
            <Text>{strings.SORT_LAST_NAME}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
  return (
    <>
      <CustomStatusBar backgroundColor={colors.grey} barStyle="dark-content" />
      <View style={[styles.root, {padding: 0, backgroundColor: '#F1F2F4'}]}>
        <Header />
        <ScrollView style={{padding: 15, borderWidth: 1}}>
          {!!employeesList ? (
            <FlatList
              data={employeesList}
              renderItem={Card}
              keyExtractor={item => item.name + item.salary}
            />
          ) : (
            <Text>No Data Available</Text>
          )}
        </ScrollView>
      </View>
      {openFilter && <FilterModal />}
      <TouchableOpacity
        style={styles.floatingBtn}
        activeOpacity={0.7}
        onPress={() =>
          navigation.dispatch(
            StackActions.replace('AddEmployee', {fromEmpList: true}),
          )
        }>
        <Image
          source={require('../../assets/images/plus.png')}
          style={styles.headerImages}
        />
      </TouchableOpacity>
    </>
  );
};

export default EmployeeList;
