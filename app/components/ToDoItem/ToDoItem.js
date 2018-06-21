import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
      style={[
        styles.todo,
        {
          textDecorationLine: todo.complete ? 'line-through' : 'none',
          letterSpacing: todo.complete ? 2 : 0,
          color: todo.complete ? 'white' : 'lightseagreen',
        },
      ]}
    >
      {todo.value}
    </Text>
    <View style={styles.buttons}>
      <TouchableOpacity onPress={() => deleteToDo(todo.key)}>
        <FontAwesome
          name="trash-o"
          size={20}
          color={todo.complete ? 'white' : 'lightseagreen'}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => completeToDo(todo.key)}>
        {todo.complete ? (
          <FontAwesome
            name="remove"
            size={20}
            color={todo.complete ? 'white' : 'lightseagreen'}
            style={styles.iconStyle}
          />
        ) : (
          <FontAwesome
            name="check"
            size={20}
            color={todo.complete ? 'white' : 'lightseagreen'}
            style={styles.iconStyle}
          />
        )}
      </TouchableOpacity>
    </View>
  </View>
);

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
  }).isRequired,
  deleteToDo: PropTypes.func.isRequired,
  completeToDo: PropTypes.func.isRequired,
};

export default ToDoItem;
