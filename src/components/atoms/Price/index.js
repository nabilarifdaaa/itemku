import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from 'utils';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Price = ({price, size, type}) => {
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  if(type==='discount'){
      return <Text style={styles.discountTxt}>Rp {formattedPrice}</Text>
  }
  return (
    <View>
      <Text style={styles.text(size)}>Rp {formattedPrice}</Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  text: size => ({
    color: colors.text.orange,
    fontSize: size ? size : 14,
    fontWeight: 'bold',
  }),
  discountTxt: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: colors.text.secondary,
    fontSize: 10,
    marginLeft: wp(1)
  },
});
