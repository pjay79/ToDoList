import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Button = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.buttonContainer}>
      <Icon name="directions-run" size={14} color="white" />
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
