import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { ImgLogo } from 'assets';
import {colors} from 'utils';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={ImgLogo} style={styles.logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 203,
    height: 203,
  },
});
