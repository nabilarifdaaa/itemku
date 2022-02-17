import React from 'react';
import {StyleSheet, Image, View, StatusBar} from 'react-native';
import {ImgLogoText} from 'assets';
import {colors} from 'utils';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar
          barStyle='dark-content'
          hidden={false}
          backgroundColor={colors.white}
          translucent={true}
        />
      <View style={styles.section}>
        <Image source={ImgLogoText} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 30,
    paddingTop: 50,
    backgroundColor: colors.white
  },
  logo: {
    height: 40,
    width: 130,
    marginLeft: 30,
  },
  section: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
});
