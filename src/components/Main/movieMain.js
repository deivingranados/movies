import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    marginBottom: 10,
  },
  parent: {
    backgroundColor: '#283546',
  },
  child: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    width: 150,
  },
  imageMovie: {
    width: 170,
    height: 250,
    borderRadius: 5,
  },
  conatentSearch: {
    backgroundColor: '#5ca1d4',
    marginBottom: 15,
  },
  input: {
    height: 35,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'lucida grande',
  },
});

export default styles;
