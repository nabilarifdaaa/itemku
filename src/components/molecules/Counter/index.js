import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICAdd, ICRemove} from 'assets';
import {colors} from 'utils';
import {Input} from 'components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Counter = () => {
  const [text, onChangeText] = useState('0');
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ICRemove fill={colors.button.greyLight} />
      </TouchableOpacity>
      <View style={{width: wp(10)}}>
        <Input height={hp(1)} onChangeText={onChangeText} value={text} />
      </View>
      <TouchableOpacity>
        <ICAdd fill={colors.button.blue} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
