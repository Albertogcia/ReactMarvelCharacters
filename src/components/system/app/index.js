import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import store from '../../../config/redux';
import CharactersList from '../../pages/charactersList';
import CharacterDetails from '../../pages/characterDetails';
import NewCharacter from '../../pages/newCharacter';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene key="CharactersList" component={CharactersList} initial title="Characters" rightTitle={'New'}
              onRight={() => Actions.push('NewCharacter')}/>
          <Scene key="CharacterDetails" component={CharacterDetails} back/>
          <Scene key="NewCharacter" component={NewCharacter} back/>
        </Stack>
      </Router>
    </Provider>
    );
  }
}

export default App;
