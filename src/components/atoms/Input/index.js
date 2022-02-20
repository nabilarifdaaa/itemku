import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from 'utils';

const Input = ({label, placeholder, onChangeText, value, height}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View>
      <Text style={styles.label(focus)}>{label}</Text>
      <TextInput
        style={styles.input(focus,height)}
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
  label: focus => ({
    fontSize: 12,
    color: focus === true ? colors.input.focus.label : colors.input.blur.label,
    marginBottom: 5,
  }),
  input: (focus, height) => ({
    borderBottomWidth: 1,
    borderBottomColor:
      focus === true ? colors.input.focus.border : colors.input.blur.border,
    paddingVertical: 5,
    height: height ? height : 30,
    fontSize: 12,
  }),
});
