import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    width: windowWidth,
    height: undefined,
    aspectRatio: 2 / 1,
  },
  imageButtonContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageButton: {
    backgroundColor: 'rgba(255,255,255, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  imageButtonLabel: {
    color: 'black',
    fontSize: 16,
  },
  error: {
    textAlign: 'left',
    fontSize: 12,
    color: 'red',
    marginTop: 6,
    marginStart: 16
  },
  input: {marginBottom: 40, marginHorizontal: 20},
});

export default styles;
