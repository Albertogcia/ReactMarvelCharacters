import {StyleSheet} from 'react-native';

export const placeholderTextColor = 'grey';
export default StyleSheet.create({
  inputContainer: {},
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  input: {color: 'black', fontSize: 16},
  inputError: {
    textAlign: 'left',
    fontSize: 12,
    color: 'red',
    marginTop: 6,
  },
});
