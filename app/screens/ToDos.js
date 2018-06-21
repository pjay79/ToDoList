import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import uuidV4 from 'uuid/v4';
import Input from '../components/Input';
import ToDoList from '../components/ToDoList';

export default class ToDos extends Component {
  static navigationOptions = {
    title: 'ToDos',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'lightseagreen',
    },
  };

  state = {
    todo: '',
    todoList: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  onChangeText = (todo) => {
    this.setState({ todo });
  };

  fetchData = async () => {
    try {
      const result = await AsyncStorage.getItem('todoList');
      this.setState({ todoList: JSON.parse(result) });
    } catch (error) {
      console.log(error);
    }
  };

  addToDo = () => {
    if (this.state.todo) {
      this.setState(
        prevState => ({
          todoList: [
            ...prevState.todoList,
            {
              key: uuidV4(),
              value: prevState.todo,
              complete: false,
            },
          ],
          todo: '',
        }),
        () => {
          AsyncStorage.setItem('todoList', JSON.stringify(this.state.todoList));
        },
      );
    }
  };

  deleteToDo = (key) => {
    this.setState(
      prevState => ({
        todoList: prevState.todoList.filter(todo => todo.key !== key),
      }),
      () => {
        AsyncStorage.setItem('todoList', JSON.stringify(this.state.todoList));
      },
    );
  };

  completeToDo = (key) => {
    const todoList = [...this.state.todoList];
    const completedToDo = todoList.findIndex(todo => todo.key === key);
    todoList[completedToDo].complete = !todoList[completedToDo].complete;
    this.setState({ todoList }, () => {
      AsyncStorage.setItem('todoList', JSON.stringify(todoList));
    });
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
            onChangeText={this.onChangeText}
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
  },
});
