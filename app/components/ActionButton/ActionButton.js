import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const ActionButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ position: 'absolute', right: 30, bottom: 30 }}>
    <View style={styles.buttonContainer}>
      <Icon name="plus" size={20} color="white" />
    </View>
  </TouchableOpacity>
);

ActionButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default ActionButton;
