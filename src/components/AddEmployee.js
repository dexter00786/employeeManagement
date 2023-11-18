import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useReducer, useState} from 'react';
import CustomStatusBar from '../customComponent/CustomStatusBar';
import {styles} from './Styles';
import CustomButton from '../customComponent/CustomButton';
import {colors} from '../constants/Colors';
import {strings} from '../constants/strings';
import CustomInput from '../customComponent/CustomInput';
import {validateInputs} from '../utils/validation';
import {useDispatch, useSelector} from 'react-redux';
import {addEmployeeAction} from '../store/actions/actions';
import {StackActions, useNavigation} from '@react-navigation/native';

const AddEmployee = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const fromEmpList = props && props.route && props.route.params;

  useSelector(state => {
    console.log(state.addEmployeeReducer, '####useSelector');
    return state.addEmployeeReducer;
  });

  const saveEmpDetails = () => {
    const res = validateInputs(firstName, lastName, salary);
    setErrors(res.errors);
    if (res.formIsValid) {
      const data = {
        firstName: firstName,
        lastName: lastName,
        jobTitle: jobTitle,
        salary: salary,
        isFavourite: false,
      };
      dispatch(addEmployeeAction(data));
      navigation.dispatch(StackActions.replace('EmployeeList'));
    }
  };

  const BackBtn = () => (
    <View>
      <TouchableOpacity
        style={{
          paddingTop: 15,
          paddingHorizontal: 15,
        }}
        onPress={() =>
          navigation.dispatch(StackActions.replace('EmployeeList'))
        }>
        <Image
          source={require('../../assets/images/arrow.png')}
          style={styles.headerImages}
        />
      </TouchableOpacity>
    </View>
  );

  console.warn(props.route.params);
  return (
    <>
      <CustomStatusBar barStyle="dark-content" backgroundColor={colors.grey} />
      {fromEmpList && <BackBtn />}
      <ScrollView style={[styles.root]}>
        <View style={styles.textWrapper}>
          <Text
            style={{fontSize: 20, color: colors.textGreen, fontWeight: 'bold'}}>
            {strings.ENTER_EMP_DETAILS}
          </Text>
        </View>
        <CustomInput
          title={strings.FIRST_NAME}
          onChangeText={value => setFirstName(value)}
          error={errors['firstNameError']}
        />
        <CustomInput
          title={strings.LAST_NAME}
          onChangeText={value => setLastName(value)}
          error={errors['lastNameError']}
        />
        <CustomInput
          title={strings.JOB_TITLE}
          onChangeText={value => setJobTitle(value)}
        />
        <CustomInput
          title={strings.SALARY}
          onChangeText={value => setSalary(value)}
          error={errors['salaryError']}
        />
        <CustomButton
          title={strings.SAVE}
          backgroundColor={colors.textGreen}
          color={colors.white}
          space={30}
          onPress={() => saveEmpDetails()}
        />
      </ScrollView>
    </>
  );
};

export default AddEmployee;
