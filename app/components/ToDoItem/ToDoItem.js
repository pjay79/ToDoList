import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ToDoItem = ({ todo }) => (
  <View style={styles.itemWrapper}>
    <Text>{todo.value}</Text>
  </View>
);

export default ToDoItem;
