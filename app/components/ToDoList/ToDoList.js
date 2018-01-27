import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import ToDoItem from '../ToDoItem';

const ToDoList = ({ todos, deleteToDo }) => (
  <FlatList
    data={todos}
    renderItem={({ item }) => <ToDoItem todo={item} deleteToDo={deleteToDo} />}
  />
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

export default ToDoList;
