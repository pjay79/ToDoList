import React from 'react';
import ToDoItem from '../ToDoItem';

const ToDoList = ({ todos }) => todos.map(todo => <ToDoItem todo={todo} key={todo} />);

export default ToDoList;
