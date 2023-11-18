import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {colors} from '../constants/Colors';
import {styles} from '../components/Styles';

const CustomInput = ({...props}) => {
  return (
    <View style={{padding: 15}}>
      <Text>{props.title}</Text>
      <TextInput style={styles.customInput} onChangeText={props.onChangeText} />
      {props.error && (
        <View style={styles.errorWrapper}>
          <Text style={styles.errorColor}>{props.error}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomInput;
