import {View, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';

const CustomStatusBar = ({backgroundColor, ...props}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        height: StatusBar.currentHeight,
      }}>
      <SafeAreaView>
        <StatusBar backgroundColor={backgroundColor} translucent {...props} />
      </SafeAreaView>
    </View>
  );
};

export default CustomStatusBar;
