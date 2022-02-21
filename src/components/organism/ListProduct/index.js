import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Product, Title} from '../../molecules';
import DropShadow from 'react-native-drop-shadow';
import {Gap} from '../../atoms';
import {colors} from 'utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ListProduct = ({
  json,
  title,
  hasShowAll,
  navigation,
  textShowAll,
  desc,
  descSize,
}) => {
  return (
    <View style={styles.container}>
      <Title
        title={title}
        hasShowAll={hasShowAll}
        textShowAll={textShowAll}
        desc={desc}
        descSize={descSize}
      />
      <View style={styles.scrollWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.listWrapped}>
            <Gap width={70} />
            {json.data.map((items, i) => {
              return (
                <DropShadow style={(i === items.length - 1) ? {marginRight: 0} : styles.shadowProp}>
                  <Product
                    key={items.id}
                    image={items.image}
                    product_name={items.product_name}
                    game_name={items.game_name}
                    price={items.price}
                    discount={items.discount}
                    stock={items.stock}
                    sold_item={items.sold_item}
                    delivery={items.delivery}
                    onPress={() =>
                      navigation.navigate('Detail', {
                        items,
                      })
                    }
                  />
                </DropShadow>
              );
            })}
            <Gap width={70} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingRight: 0
  },
  titleSection: {
    fontSize: 14,
    color: colors.text.primary,
    fontWeight: 'bold',
  },
  shadowProp: {
    display: 'flex',
    marginRight: 20,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  scrollWrapper: {
    marginHorizontal: wp(-17),
  },
  listWrapped: {
    marginVertical: hp(3),
    flexDirection: 'row'
  },
});
