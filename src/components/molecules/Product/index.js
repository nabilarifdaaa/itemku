import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {colors} from 'utils';
import {Badge, Gap} from '../../atoms';
import { Title } from '..';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Product = ({
  image,
  product_name,
  game_name,
  price,
  discount,
  sold_item,
  stock,
  delivery,
  onPress,
  desc,
  descSize,
}) => {
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const countDisc = () => {
    const disc = discount * price / 100
    const priceAfterDisc = price - disc
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <DropShadow style={styles.shadowProp}>
        <View style={styles.card}>
          <View>
            <Image
              source={{
                uri: image,
              }}
              style={styles.img}
            />
          </View>
          <View style={styles.content}>
            <View>
              <Title type="product" product_name={product_name} game_name={game_name} desc={desc} descSize={descSize} />
              <Gap height={10} />
              <Badge text={stock} type="stock" />
              <Gap height={10} />
              {delivery && (
                <View>
                  <Badge text={delivery} type="delivery" />
                  <Gap height={10} />
                </View>
              )}
              {discount !== 0 && (
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Badge text={discount} type="discount" />
                    <Text style={styles.discountTxt}>{formattedPrice}</Text>
                  </View>
                  <Gap height={10} />
                </View>
              )}
              <Text style={styles.priceTxt}>Rp {formattedPrice}</Text>
            </View>
            <View>
              <Gap height={10} />
              <Text style={styles.soldTxt}>{sold_item} Produk Terjual</Text>
            </View>
          </View>
        </View>
      </DropShadow>
    </TouchableOpacity>
  );
};

export default Product;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // flexGrow: 1,
    width: wp(35),
    flexWrap: 'wrap',
    marginRight: 20,
    alignItems: 'stretch'
  },
  img: {
    height: hp(10),
    width: wp(35),
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  card: {
    flex: 1,
    // flexGrow: 1,
    alignItems: 'stretch',
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'stretch'
    // display: 'flex'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // justifyContent: 'space-between',
    padding: 10,
  },
  
  priceTxt: {
    color: colors.text.orange,
    fontSize: 14,
    fontWeight: 'bold',
  },
  soldTxt: {
    color: '#9F9F9F',
    fontSize: 12,
    marginTop: 'auto'
  },
  discountTxt: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: colors.text.secondary,
    fontSize: 10,
    marginLeft: wp(1)
  },
});
