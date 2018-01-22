import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

class CompletedToDos extends Component {
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
    tabBarLabel: 'Completed',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="check" type="font-awesome" size={20} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Completed todos...</Text>
        <Button title="Go to Pending" onPress={() => this.props.navigation.navigate('Pending')} />
        <Button title="Back to Home" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CompletedToDos;
