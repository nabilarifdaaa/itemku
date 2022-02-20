import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Price, Badge } from '../../atoms';

const DiscountTag = ({discount, price}) => {
  return (
    <View style={styles.row}>
      <Badge text={discount} type="discount" />
      <Price price={price} type="discount" />
    </View>
  );
};

export default DiscountTag;

const styles = StyleSheet.create({
    row: {flexDirection: 'row'}
});
