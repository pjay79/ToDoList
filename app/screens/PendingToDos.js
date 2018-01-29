import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '../components/Input';
import ToDoList from '../components/ToDoList';

class PendingToDos extends Component {
  static navigationOptions = {
    title: 'Pending',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'lightseagreen',
      borderBottomWidth: 0,
    },
    headerLeft: null,
    tabBarLabel: 'Pending',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="th-list" type="font-awesome" size={20} color={tintColor} />
    ),
  };

  state = {
    todo: '',
    todoList: [
      { key: JSON.stringify(`Buy milk - ${new Date()}`), value: 'Buy milk', complete: false },
      { key: JSON.stringify(`Clean house - ${new Date()}`), value: 'Clean house', complete: false },
      { key: JSON.stringify(`Post mail - ${new Date()}`), value: 'Post mail', complete: false },
    ],
  };

  createToDo = (todo) => {
    this.setState({ todo });
  };

  addToDo = () => {
    if (this.state.todo.trim() !== '') {
      const todoList = [
        ...this.state.todoList,
        {
          key: JSON.stringify(`${this.state.todo} - ${new Date()}`),
          value: this.state.todo,
          complete: false,
        },
      ];
      this.setState({ todoList });
      this.setState({ todo: '' });
      console.log(todoList);
    }
  };

  deleteToDo = (key) => {
    const todoList = [...this.state.todoList.filter(todo => todo.key !== key)];
    this.setState({
      todoList,
    });
    console.log(todoList);
  };

  completeToDo = (key) => {
    const todoList = [...this.state.todoList];
    const completedToDo = todoList.findIndex(todo => todo.key === key);
    todoList[completedToDo].complete = true;
    console.log(todoList);
  };

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <ToDoList
            todos={this.state.todoList}
            deleteToDo={this.deleteToDo}
            completeToDo={this.completeToDo}
          />
          <Input
            onChangeText={this.createToDo}
            value={this.state.todo}
            onSubmitEditing={this.addToDo}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default PendingToDos;
