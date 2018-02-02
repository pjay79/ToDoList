import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ToDoItem = ({ todo, deleteToDo, completeToDo }) => (
  <View
    style={[
      styles.itemWrapper,
      {
        backgroundColor: todo.complete ? 'lightseagreen' : 'white',
      },
    ]}
  >
    <Text
      style={{
        textDecorationLine: todo.complete ? 'line-through' : 'none',
        color: todo.complete ? 'white' : 'lightseagreen',
      }}
    >
      {todo.value}
    </Text>
    <View style={styles.buttonWrapper}>
      <TouchableOpacity onPress={() => deleteToDo(todo.key)}>
        <Icon
          name="trash-o"
          size={20}
          color={todo.complete ? 'white' : 'lightseagreen'}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => completeToDo(todo.key)}>
        <Icon
          name="check"
          size={20}
          color={todo.complete ? 'white' : 'lightseagreen'}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  </View>
);

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  deleteToDo: PropTypes.func.isRequired,
  completeToDo: PropTypes.func.isRequired,
};

export default ToDoItem;
