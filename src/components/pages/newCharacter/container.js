import {connect} from 'react-redux';
import * as charactersActions from '../../../redux/characters/actions';
import Component from './view';

const mapDispatchToProps = dispatch => {
  return {
    createNewCharacter: data => {
      dispatch(charactersActions.postNewCharacter(data))
    }
  };
};

const mapStateToProps = (state) => { return { } };

const connectFunction = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connectFunction(Component);

export default connectedComponent;