import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colors } from 'utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Link } from '../../atoms';

const ConfigToast = {
  basic: ({text1}) => (
    <View style={styles.toast}>
      <Text style={styles.toastTxt}>
        {text1}
      </Text>
      <Link text="Lihat" />
    </View>
  ),
};

export default ConfigToast;

const styles = StyleSheet.create({
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
