import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Scene, Stack} from 'react-native-router-flux';
import store from '../../../config/redux';
import CharactersList from '../../pages/charactersList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene key="CharactersList" component={CharactersList} initial title="Characters"/>
        </Stack>
      </Router>
    </Provider>
    );
  }
}

export default App;
