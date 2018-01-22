import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet } from 'react-native';
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
    title: 'My ToDos App',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'lightseagreen',
    },
    headerLeft: null,
    tabBarLabel: 'Pending',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="th-list" type="font-awesome" size={20} color={tintColor} />
    ),
  };

  state = {
    todo: '',
    todoList: ['Buy milk', 'Do the laundry', 'Vacuum house'],
  };

  createToDo = (todo) => {
    this.setState({ todo });
  };

  addToDo = () => {
    // console.log(this.state.todoList);
    // console.log(this.state.todo);
    const todoList = [...this.state.todoList, this.state.todo];
    // console.log(todoList);
    this.setState({ todoList });
    this.setState({ todo: '' });
  };

  render() {
    return (
      <View style={styles.container}>
        <ToDoList todos={this.state.todoList} />
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
