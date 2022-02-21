import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {colors} from 'utils';
import {Badge, Gap, Price} from '../../atoms';
import { DiscountTag, Title } from '..';
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
  const [newPrice, setNewPrice] = useState(0)
  useEffect(() => {
    const disc = discount * price / 100
    const priceAfterDisc = price - disc
    setNewPrice(priceAfterDisc)
  }, []);

  return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
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
                <DiscountTag discount={discount} price={price}/>
                <Gap height={10} />
              </View>
            )}
            <Price price={newPrice}/>
          </View>
        </View>
        <View style={{marginTop: 'auto', padding: 10}}>
          <Text style={styles.soldTxt}>{sold_item} Produk Terjual</Text>
        </View>
      </TouchableOpacity>
  );
};

export default Product;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    width: wp(35),
    flex: 1
  },
  img: {
    height: hp(10),
    width: wp(35),
  },
  shadowProp: {
    display: 'flex',
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
  soldTxt: {
    color: '#9F9F9F',
    fontSize: 12,
    marginTop: 'auto'
  },
});
