import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: 'white',
    width,
    borderBottomWidth: 4,
    borderColor: '#FC3553',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default styles;
