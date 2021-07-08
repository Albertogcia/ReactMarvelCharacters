import {StyleSheet} from 'react-native';
import { Reducer } from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {flex: 1},
    image: {
        width: '100%',
        height: undefined,
        resizeMode: 'cover',
      },
      characterData: {
          margin: 16
      },
      dataTitle: {
          fontWeight: 'bold',
          fontSize: 20
      },
      dataText: {
          marginTop: 8
      }

});

export default styles;