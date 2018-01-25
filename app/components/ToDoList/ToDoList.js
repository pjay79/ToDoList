import React from 'react';
import { FlatList } from 'react-native';
import ToDoItem from '../ToDoItem';

const ToDoList = ({ todos }, props) => (
  <FlatList data={todos} renderItem={({ item }) => <ToDoItem todo={item} id={item.id} />} />
);

export default ToDoList;
