import React from 'react';
import PropTypes from 'prop-types';
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

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

export default Input;
