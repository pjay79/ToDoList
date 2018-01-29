import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.8,
    backgroundColor: 'white',
    borderColor: 'lightseagreen',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },
  buttonWrapper: {
    alignSelf: 'flex-end',
  },
  iconStyle: {
    margin: 5,
  },
});

export default styles;
