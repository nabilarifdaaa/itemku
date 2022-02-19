import React from 'react';
import {StyleSheet, Image, View, ScrollView, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Header, Divider, Title, ListProduct, Button, Link} from 'components';
import {JSONProductList2} from 'assets';
import {colors} from 'utils';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

const Detail = ({route, navigation}) => {
  const item = route.params.items;
  
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.img}
        />
        <View style={styles.section}>
          <Title
            product_name={item.product_name}
            game_name={item.game_name}
            hasWishlist
            type="product"
          />
        </View>
        <Divider />
        <View style={styles.section}>
          <Title title="Deskripsi Produk" desc={item.description} descTruncate/>
          <View style={{alignItems: 'flex-end', marginTop: 10}}>
            <Link
              text="Selengkapnya"
              size={14}
              onPress={() => SheetManager.show('helloworld_sheet')}
            />
          </View>
        </View>
        <Divider />
        <ListProduct
          json={JSONProductList2}
          title="Pengiriman Tercepat"
          navigation={navigation}
          hasShowAll
          textShowAll="Lihat Semua"
          desc={JSONProductList2.desc}
          descSize={10}
        />
      </ScrollView>
      <Button />
      <ActionSheet id="helloworld_sheet">
        <View style={styles.actions}>
          <Text>Hello World</Text>
        </View>
      </ActionSheet>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  img: {
    width: wp(100),
    height: hp(30),
  },
  section: {
    padding: 20,
  },
  actions: {
    padding: 50,
  },
});
