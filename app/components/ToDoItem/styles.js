import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  itemWrapper: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingTop: 10,
    margin: 0,
  },
  todo: {
    width: width * 0.9,
    paddingLeft: 10,
  },
  buttons: {
    width: width * 0.1,
  },
});

export default styles;
