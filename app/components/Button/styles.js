import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#FC3553',
    paddingHorizontal: 40,
    paddingVertical: 10,
    width: width * 0.8,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
