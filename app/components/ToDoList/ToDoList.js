import React from 'react';
import { FlatList } from 'react-native';
import ToDoItem from '../ToDoItem';

const ToDoList = ({ todos }) => (
  <FlatList
    data={todos}
    renderItem={({ item }) => <ToDoItem todo={item} />}
    keyExtractor={item => item.key}
  />
);

export default ToDoList;
