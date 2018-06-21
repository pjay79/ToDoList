import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Button from '../components/Button';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Stuff To Do</Text>
          <Text style={styles.subtitle}>REACT NATIVE</Text>
        </View>
        <View>
          <Image style={styles.image} source={require('../assets/images/todos.png')} />
          <Text style={styles.imageText}>It&apos;s never too late to get your shit together.</Text>
        </View>
        <Button title="START" onPress={() => this.props.navigation.navigate('ToDos')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightseagreen',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 54,
    fontFamily: 'NoteWorthy-Bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Verdana-Bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  imageText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'NoteWorthy',
    marginTop: 20,
  },
});

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
