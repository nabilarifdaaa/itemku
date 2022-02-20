import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors} from 'utils';
import IconOnly from './iconOnly';

const Button = ({onPress, type, icon, withBg}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} withBg={withBg}/>;
  }
  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Tambah ke Troli</Text>
      </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button.primary,
    borderRadius: 5,
    height: heightPercentageToDP(5),
    justifyContent: 'center',
  },
  text: {
    color: colors.text.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
