import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    width: windowWidth,
    height: undefined,
    aspectRatio: 2 / 1,
  },
  image: {width: '100%', height: '100%', resizeMode: 'cover'},
  textContainer: {
    backgroundColor: '#00000080',
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    color: 'white',
    marginStart: 8,
    marginTop: 8,
    fontSize: 16
  }
});

export default styles;
