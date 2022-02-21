import React, {useState, useRef} from 'react';
import {Animated, StyleSheet, Image, View, ScrollView} from 'react-native';
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
  ConfigToast,
  BottomSheet,
} from 'components';
import {JSONProductList2} from 'assets';
import {colors} from 'utils';
import {SheetManager} from 'react-native-actions-sheet';
import Toast from 'react-native-toast-message';

const Detail = ({route, navigation}) => {
  const item = route.params.items;
  const [onScroll, setOnScroll] = useState(false);
  const [count, setCount] = useState(0)
  const fadeAnim = useRef(new Animated.Value(0)).current;
  let scrollY;

  handleScroll = event => {
    // Animated.event(
    //   [{ nativeEvent: { contentOffset: { y: fadeAnim } } }],
    //   { useNativeDriver: true }
    // )
    scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY > 0) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      }).start();
      setOnScroll(fadeAnim);
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true
      }).start();
      setOnScroll(fadeAnim);
    }
  };

  const showToast = () => {
    SheetManager.hide('add_cart');
    Toast.show({
      type: 'basic',
      position: 'bottom',
      text1: 'Produk ditambahkan ke Troli',
    });
    setCount(count+1)
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >

        <Header onPressBack={() => navigation.goBack()} onScroll={onScroll} countCart={count}/>
      </Animated.View>
      {/* <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: fadeAnim } } }],
          { useNativeDriver: true }
        )}
      >
      </Animated.ScrollView> */}
      <Animated.ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false} onScroll={handleScroll}>
        <Image
          source={{
            // uri: item.image,
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
          <View style={styles.right}>
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
      </Animated.ScrollView>
      <View style={styles.containerButton}>
        <Button onPress={() => SheetManager.show('add_cart')} />
      </View>
      <BottomSheet
        id="product_description"
        title="Deskripsi Produk"
        titleDesc={item.description}
        onPressClose={() => SheetManager.hide('product_description')}
      />
      <BottomSheet
        type="add_cart"
        id="add_cart"
        title="Informasi Pesanan"
        onPressClose={() => SheetManager.hide('add_cart')}
        img={item.image}
        product_name={item.product_name}
        game_name={item.game_name}
        price={item.price}
        stock={item.stock}
        labelInput="Catatan untuk penjual (optional)"
        onPressButton={showToast}
      />
      <Toast config={ConfigToast} />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
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
    zIndex: -1,
    width: wp(100),
    height: hp(30),
  },
  section: {
    padding: wp(5),
  },
  right: {
    alignItems: 'flex-end',
    marginTop: 10
  },
});
