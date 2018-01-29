import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import styles from './styles';

const Input = ({
  onChangeText, value, onSubmitEditing, style,
}) => (
  <View>
    <TextInput
      autoFocus
      placeholder="Enter your todos here..."
      returnKeyType="done"
      underlineColorAndroid="transparent"
      style={[styles.inputStyle, style]}
      onChangeText={onChangeText}
      value={value}
      onSubmitEditing={onSubmitEditing}
    />
  </View>
);

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  style: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.any,
  }),
};

Input.defaultProps = {
  style: {},
};

export default Input;
