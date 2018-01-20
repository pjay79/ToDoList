import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PendingToDos = () => (
  <View style={styles.container}>
    <Text>Pending todos...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PendingToDos;
