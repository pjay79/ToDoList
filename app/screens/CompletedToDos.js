import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompletedToDos = () => (
  <View style={styles.container}>
    <Text>Completed todos...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CompletedToDos;
