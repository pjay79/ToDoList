import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

const ToDoItem = ({ todo }) => (
  <View style={styles.itemWrapper}>
    <Text>{todo.value}</Text>
  </View>
);

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default ToDoItem;
