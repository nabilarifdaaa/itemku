import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colors } from 'utils';

const Toast = () => {
  return (
    <View style={styles.container}>
      <Text>Toast</Text>
    </View>
  );
};

export default Toast;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    backgroundColor: colors.toast.primary,
    alignItems: 'flex-end',
  }
});
