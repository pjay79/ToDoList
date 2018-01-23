import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const Input = props => (
  <View>
    <TextInput
      autoFocus
      placeholder="Enter your todos here..."
      returnKeyType="done"
      underlineColorAndroid="transparent"
      style={styles.inputStyle}
      onChangeText={props.onChangeText}
      value={props.value}
      onSubmitEditing={props.onSubmitEditing}
    />
  </View>
);

export default Input;
