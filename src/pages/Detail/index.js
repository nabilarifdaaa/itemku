import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, ScrollView, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Header,
  Divider,
  Title,
  ListProduct,
  Button,
  Link,
  Price,
  Badge,
  Gap,
  Input,
  Counter,
} from 'components';
import {JSONProductList2} from 'assets';
import {colors} from 'utils';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import Toast from 'react-native-toast-message';

const Detail = ({route, navigation}) => {
  const item = route.params.items;
  const [onScroll, setOnScroll] = useState(false);
  let scrollY;

  handleScroll = event => {
    scrollY = event.nativeEvent.contentOffset.y;
    console.log(scrollY);
    if (scrollY > 0) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  const showToast = () => {
    SheetManager.hide('add_cart');
    Toast.show({
      type: 'tomatoToast',
      position: 'bottom',
    });
  };

  const toastConfig = {
    tomatoToast: () => (
      <View style={styles.toast}>
        <Text style={styles.toastTxt}>
          Produk berhasil ditambahkan ke Troli
        </Text>
        <Link text="Lihat" />
      </View>
    ),
  };

  return (
    <View style={styles.container}>
      <Header onPressBack={() => navigation.goBack()} onScroll={onScroll} />
      <ScrollView showsVerticalScrollIndicator={false} onScroll={handleScroll}>
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
          <Title
            title="Deskripsi Produk"
            desc={item.description}
            descTruncate
          />
          <View style={{alignItems: 'flex-end', marginTop: 10}}>
            <Link
              text="Selengkapnya"
              size={14}
              onPress={() => SheetManager.show('product_description')}
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
      <View style={styles.containerButton}>
        <Button onPress={() => SheetManager.show('add_cart')} />
      </View>
      <ActionSheet id="product_description">
        <View style={styles.actions}>
          <Title
            title="Deskripsi Produk"
            hasClose
            desc={item.description}
            onPress={() => SheetManager.hide('product_description')}
          />
        </View>
      </ActionSheet>
      <ActionSheet id="add_cart">
        <View style={styles.actions}>
          <Title
            title="Informasi Pesanan"
            hasClose
            onPress={() => SheetManager.hide('add_cart')}
          />
          <Gap height={20} />
          <View style={styles.rowSpace}>
            <View style={styles.row}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.smallImg}
              />
              <Title
                type="product"
                product_name={item.product_name}
                game_name={item.game_name}
              />
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Price price={item.price} size={12} />
              <Gap height={hp(1)} />
              <Badge type="stock" text={item.stock} />
            </View>
          </View>
          <Gap height={15} />
          <Input
            label="Catatan untuk penjual (optional)"
            placeholder="Catatan"
          />
          <Gap height={15} />
          <View style={styles.right}>
            <Counter />
          </View>
          <Gap height={30} />
          <Button onPress={showToast} />
        </View>
      </ActionSheet>
      <Toast config={toastConfig} />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: hp(2),
    position: 'relative',
  },
  containerButton: {
    padding: hp(1.5),
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  img: {
    width: wp(100),
    height: hp(30),
  },
  section: {
    padding: wp(5),
  },
  actions: {
    padding: wp(5),
    marginBottom: wp(5),
  },
  smallImg: {
    width: wp(10),
    height: hp(5),
    borderRadius: 5,
    marginRight: wp(2),
  },
  row: {
    flexDirection: 'row',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  right: {
    alignItems: 'flex-end',
  },
  toast: {
    height: hp(6),
    width: wp(92),
    backgroundColor: colors.toast,
    marginBottom: hp(7),
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4)
  },
  toastTxt: {
    color: colors.text.white,
  },
});
