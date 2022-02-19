import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {colors} from 'utils';

const Badge = ({text, type}) => {
  if (type === 'stock') {
    if (text >= 1000) {
      return (
        <View style={styles.borderGreen}>
          <Text style={styles.greenTxt}>Stok 999+</Text>
        </View>
      );
    }
    return (
      <View style={styles.borderOrange}>
        <Text style={styles.orangeTxt}>Stok {text}</Text>
      </View>
    );
  }
  if (type === 'delivery') {
    return (
      <View
        style={styles.greenFill}>
        <Text
          style={styles.greenTxt}>
          {text}
        </Text>
      </View>
    );
  }
  if (type === 'discount') {
    return (
      <View style={styles.fillRed}>
        <Text style={styles.whiteTxt}>{text}%</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};
export default Badge;
const styles = StyleSheet.create({
  borderGreen: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.badge.borderGreen,
    maxWidth: widthPercentageToDP(15),
  },
  greenTxt: {
    color: colors.badge.borderGreen,
    fontSize: 12,
    textAlign: 'center',
  },
  borderOrange: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.badge.borderOrange,
    maxWidth: widthPercentageToDP(14),
  },
  orangeTxt: {
    color: colors.badge.borderOrange,
    fontSize: 12,
    textAlign: 'center',
  },
  fillRed: {
    borderRadius: 2, 
    backgroundColor: colors.badge.fillRed,
    paddingHorizontal: 3
  },
  whiteTxt: {
    color: colors.white,
    fontSize: 10
  },
  greenFill: {
    borderRadius: 2,
    backgroundColor: colors.badge.fillGreen,
    maxWidth: widthPercentageToDP(22)
  }
});
