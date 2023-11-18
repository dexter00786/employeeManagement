import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../components/Styles';

const CustomButton = ({...props}) => {
  return (
    <TouchableOpacity
      style={[
        styles.customButton,
        {backgroundColor: props.backgroundColor, marginTop: props.space},
      ]}
      activeOpacity={0.7}
      {...props}>
      <Text style={[styles.customButtonText, {color: props.color}]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
