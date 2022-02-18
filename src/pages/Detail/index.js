import {StyleSheet, Image, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Detail = ({route, navigation}) => {
  const item = route.params.items;
  return (
    <View>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.img}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  img: {
    width: wp(100),
    height: hp(30),
  },
});
