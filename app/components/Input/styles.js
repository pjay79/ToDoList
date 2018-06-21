import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: 'white',
    width,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'lightseagreen',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
});

export default styles;
