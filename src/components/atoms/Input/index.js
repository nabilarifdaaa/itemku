import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from 'utils'

const Input = ({label, placeholder}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View>
      <View>
        <Text style={styles.label(focus)}>{label}</Text>
        <TextInput
          style={styles.input(focus)}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </View>
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
  input: focus => ({
    borderBottomWidth: 1,
    borderBottomColor:
      focus === true ? colors.input.focus.border : colors.input.blur.border,
    paddingVertical: 5,
    // paddingHorizontal: ,
    height: 30,
    fontSize: 12,
  }),
});
