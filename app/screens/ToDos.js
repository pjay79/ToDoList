import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '../components/Input';
import ToDoList from '../components/ToDoList';

class PendingToDos extends Component {
  static navigationOptions = {
    title: 'ToDos',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'lightseagreen',
      borderBottomWidth: 0,
    },
  };

  state = {
    todo: '',
    todoList: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const result = await AsyncStorage.getItem('todoList');
    if (result !== null || undefined) {
      this.setState({ todoList: JSON.parse(result) });
    }
  };

  handleTextChange = (todo) => {
    this.setState({ todo });
  };

  addToDo = async () => {
    if (this.state.todo) {
      this.setState(prevState => ({
        todo: '',
        todoList: [
          ...prevState.todoList,
          {
            key: JSON.stringify(`${prevState.todo} - ${new Date()}`),
            value: prevState.todo,
            complete: false,
          },
        ],
      }));
      await AsyncStorage.setItem('todoList', JSON.stringify(this.state.todoList));
      console.log(this.state.todoList);
    }
  };

  deleteToDo = async (key) => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.key !== key),
    }));
    await AsyncStorage.setItem('todoList', JSON.stringify(this.state.todoList));
    console.log(this.state.todoList);
  };

  completeToDo = (key) => {
    const todoList = [...this.state.todoList];
    const completedToDo = todoList.findIndex(todo => todo.key === key);
    todoList[completedToDo].complete = !todoList[completedToDo].complete;
    this.setState({ todoList });
    AsyncStorage.setItem('todoList', JSON.stringify(todoList));
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
            onChangeText={this.handleTextChange}
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
