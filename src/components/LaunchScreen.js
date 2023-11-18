import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../constants/Colors';
import CustomStatusBar from '../customComponent/CustomStatusBar';
import CustomButton from '../customComponent/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../constants/strings';
import {styles} from './Styles';

const LaunchScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <CustomStatusBar
        backgroundColor={colors.secondaryGreen}
        barStyle="light-content"
      />
      <View style={[styles.root, {backgroundColor: colors.primaryGreen}]}>
        <View style={styles.launchscreenRoot}>
          <CustomButton
            backgroundColor={colors.secondaryGreen}
            color={colors.white}
            title={strings.ADD_EMPLOYEE}
            onPress={() => navigation.navigate('AddEmployee')}
          />
        </View>
      </View>
    </>
  );
};

export default LaunchScreen;
