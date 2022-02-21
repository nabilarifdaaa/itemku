import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {ICAdd, ICRemove} from 'assets';
import {colors} from 'utils';
import {Input} from '../../atoms';
const Counter = ({value}) => {
  const [v, setV] = useState(0)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setV(v-1)}>
        <ICRemove fill={colors.button.greyLight} style={styles.icon}/>
      </TouchableOpacity>
      <Text style={styles.countText}>{v}</Text>
      <TouchableOpacity onPress={() => setV(v+1)}>
        <ICAdd fill={colors.button.blue} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  countText: {
    color: colors.text.primary
  }
});
