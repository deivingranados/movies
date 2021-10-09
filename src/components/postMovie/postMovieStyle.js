import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  PostContent: {
    backgroundColor: '#283546',
  },
  imagePost: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },

  textPost: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    color: 'white',
    marginBottom: 10,
  },

  textPostTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    fontFamily: 'Cochin',
    padding: 5,
  },
  imageItem: {
    backgroundColor: '#5ca1d4',
    marginLeft: '3%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
  },
  titleContent: {
    textAlign: 'center',
  },
});

export default styles;
