import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingTop: 10,
    margin: 0,
  },
  todo: {
    width: '90%',
    paddingLeft: 10,
  },
  buttons: {
    width: '10%',
  },
});

export default styles;
