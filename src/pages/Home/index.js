import React from 'react';
import {StyleSheet, Image, View, StatusBar, ScrollView} from 'react-native';
import {ImgLogoText} from 'assets';
import {colors} from 'utils';
import {Product} from 'components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.white}
        translucent={true}
      />
      <View style={styles.section}>
        <Image source={ImgLogoText} style={styles.logo} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', margin: 20}}>
          <Product />
          <Product />
          <Product />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: wp(15),
    backgroundColor: colors.white,
  },
  logo: {
    height: hp(4),
    width: wp(30),
    marginLeft: 30,
  },
  section: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
});
