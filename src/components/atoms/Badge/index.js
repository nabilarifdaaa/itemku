import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
        style={{
          borderRadius: 2,
          backgroundColor: colors.badge.fillGreen,
          paddingHorizontal: 5,
          paddingVertical: 3,
        }}>
        <Text
          style={{
            color: colors.badge.borderGreen,
            fontSize: 12,
            fontWeight: 'bold',
          }}>
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
    maxWidth: 75,
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
    maxWidth: 75,
  },
  orangeTxt: {
    color: colors.badge.borderOrange,
    fontSize: 12,
    textAlign: 'center',
  },
  fillRed: {
    borderRadius: 2, 
    backgroundColor: colors.badge.fillRed,
    paddingHorizontal: 5
  },
  whiteTxt: {
    color: colors.white,
    fontSize: 10
  }
});
