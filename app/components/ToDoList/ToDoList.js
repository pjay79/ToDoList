import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import ToDoItem from '../ToDoItem';

const ToDoList = ({ todos, deleteToDo, completeToDo }) => (
  <FlatList
    data={todos}
    renderItem={({ item }) => (
      <ToDoItem todo={item} deleteToDo={deleteToDo} completeToDo={completeToDo} />
    )}
  />
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  deleteToDo: PropTypes.func.isRequired,
  completeToDo: PropTypes.func.isRequired,
};

export default ToDoList;
