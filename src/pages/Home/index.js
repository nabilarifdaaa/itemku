import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {ImgLogoText, JSONProductList, JSONProductList2} from 'assets';
import {colors} from 'utils';
import {ListProduct, Statusbar, Footer, HeaderLogo} from 'components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Statusbar color={colors.white} />
      <HeaderLogo />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListProduct
          json={JSONProductList}
          title="Termurah Seluruh Indonesia"
          navigation={navigation}
        />
        <ListProduct
          json={JSONProductList2}
          title="Produk Mobile Legends Terpopuler"
          navigation={navigation}
        />
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: wp(15),
    backgroundColor: colors.white,
  }
});
