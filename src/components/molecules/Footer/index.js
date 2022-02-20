import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from 'utils';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        2014 - 2017 PT. Five Jack All Right Reserved.
      </Text>
      <Text style={styles.text}>
        All other trademarks belong to their respective owners.
      </Text>
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  text: {
    color: colors.text.secondary,
    textAlign: 'center',
    fontSize: 10,
  },
});
