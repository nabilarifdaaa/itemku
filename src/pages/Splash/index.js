import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {ImgLogo} from 'assets';
import {colors} from 'utils';
import { Statusbar } from 'components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Statusbar color={colors.white} />
      <Image source={ImgLogo} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: wp(25),
    height: hp(25),
  },
});
