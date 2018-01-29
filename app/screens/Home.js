import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Icon name="rocket" size={30} color="white" />
    <Text style={styles.title}>My ToDos App</Text>
    <Text style={styles.description}>IT&apos;S NEVER TOO LATE TO</Text>
    <Text style={styles.description}>GET YOUR SHIT TOGETHER.</Text>
    <Button title="START" onPress={() => navigation.navigate('Pending')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightseagreen',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
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

export default Home;
