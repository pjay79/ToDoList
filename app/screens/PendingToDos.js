import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '../components/Input';
import Button from '../components/Button';
import ToDoList from '../components/ToDoList';

class PendingToDos extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

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
      { key: JSON.stringify(`Buy milk${new Date()}`), value: 'Buy milk', completed: false },
      { key: JSON.stringify(`Clean house${new Date()}`), value: 'Clean house', completed: false },
      { key: JSON.stringify(`Post mail${new Date()}`), value: 'Post mail', completed: false },
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
          key: JSON.stringify(this.state.todo + new Date()),
          value: this.state.todo,
          completed: false,
        },
      ];
      this.setState({ todoList });
      this.setState({ todo: '' });
      console.log(todoList);
    }
  };

  deleteToDo = (key) => {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.key !== key),
    });
  };

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <ToDoList todos={this.state.todoList} deleteToDo={this.deleteToDo} />
          <Input
            onChangeText={this.createToDo}
            value={this.state.todo}
            onSubmitEditing={this.addToDo}
          />
          <Button
            title="Go to Completed"
            onPress={() => this.props.navigation.navigate('Completed')}
          />
          <Button title="Back to Home" onPress={() => this.props.navigation.navigate('Home')} />
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

export default PendingToDos;
