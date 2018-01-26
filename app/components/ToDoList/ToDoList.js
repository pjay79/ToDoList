import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import ToDoItem from '../ToDoItem';

const ToDoList = ({ todos }) => (
  <FlatList data={todos} renderItem={({ item }) => <ToDoItem todo={item} id={item.id} />} />
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default ToDoList;
