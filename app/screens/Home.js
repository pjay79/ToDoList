import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/images/todos.png')} />
        <Text style={styles.title}>ToDos</Text>
        <Text style={styles.description}>IT&apos;S NEVER TOO LATE TO</Text>
        <Text style={styles.description}>GET YOUR SHIT TOGETHER.</Text>
        <Button
          style={{ backgroundColor: '#FC3553' }}
          title="START"
          onPress={() => this.props.navigation.navigate('ToDos')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightseagreen',
  },
  image: {
    height: 150,
    width: 150,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
