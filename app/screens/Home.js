import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => (
  <View style={styles.container}>
    <Icon name="rocket" size={30} color="white" />
    <Text style={styles.title}>My ToDos App</Text>
    <Text style={styles.description}>BUILT WITH REACT NATIVE</Text>
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
  },
});

export default Home;
