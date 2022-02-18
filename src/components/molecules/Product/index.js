import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {DummyProduct1} from 'assets';
import {colors} from 'utils';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useTailwind} from 'tailwind-rn';

const Product = () => {
  const tailwind = useTailwind();
  return (
    <View style={styles.container}>
      <DropShadow style={styles.shadowProp}>
    <View style={tailwind('bg-white flex flex-col flex-wrap w-40 mr-5 overflow-hidden rounded-lg ')}>
       <Image
          source={DummyProduct1}
          style={tailwind('h-20 w-auto')}
        />
        <Text style={tailwind('text-black text-lg font-bold')}>Nama Product nama nama </Text>
        <Text style={tailwind('text-black text-sm')}>Nama Product</Text>
        <Text style={tailwind('py-1 px-1.5 border rounded-sm border-green-400 text-green-400')}>Stok 999+</Text>
        <Text style={tailwind('text-lg font-bold text-orange-400')}>Rp 100.000</Text>
        <Text style={tailwind('py-1 px-1.5 rounded-sm bg-green-400 text-green-700')}>10 Menit Kirim</Text>
    </View>
    </DropShadow>
    </View>
    
  );
};

export default Product;
const styles = StyleSheet.create({
  container: {
    width: wp(35),
    marginRight: 20
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
