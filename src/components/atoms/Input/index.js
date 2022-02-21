import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from 'utils';

const Input = ({label, placeholder, onChangeText, value, height}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input(focus, height)}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: colors.text.primary,
    marginBottom: 5,
  },
  input: (focus, height) => ({
    borderBottomWidth: 1,
    borderBottomColor:
      focus === true ? colors.input.focus.border : colors.input.blur.border,
    paddingVertical: 5,
    height: height ? height : 30,
    fontSize: 12,
    color: colors.text.primary,
  }),
});
