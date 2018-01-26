import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ToDoItem = ({ todo, deleteToDo }) => (
  <View style={styles.itemWrapper}>
    <Text>{todo.value}</Text>
    <TouchableOpacity onPress={() => deleteToDo(todo.key)}>
      <Icon name="trash-o" type="font-awesome" size={20} color="lightseagreen" />
    </TouchableOpacity>
  </View>
);

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

export default ToDoItem;
