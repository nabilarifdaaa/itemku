import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {colors} from 'utils';
import {ImgLogoText} from 'assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HeaderLogo = () => {
  return (
    <View style={styles.container}>
      <Image source={ImgLogoText} style={styles.logo} />
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  logo: {
    height: hp(4),
    width: wp(30),
    marginLeft: 30,
  },
});
