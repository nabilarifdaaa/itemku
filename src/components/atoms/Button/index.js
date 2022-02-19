import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors} from 'utils';
import IconOnly from './iconOnly';

const Button = ({onPress, type, icon}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress}/>;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Tambah ke Troli</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
      padding: 10,
      borderTopWidth: 1,
      borderTopColor: colors.line
  },
  button: {
    backgroundColor: colors.button.primary,
    borderRadius: 5,
    height: heightPercentageToDP(5),
    justifyContent: 'center'
  },
  text: {
    color: colors.text.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
