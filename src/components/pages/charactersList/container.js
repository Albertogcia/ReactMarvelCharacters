import {connect} from 'react-redux';
import * as charactersActions from '../../../redux/characters/actions';
import Component from './view';

const mapStateToProps = state => {
  return {
    list: state.characters.list,
    loading: state.characters.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: value => {
      dispatch(charactersActions.setLoading(value));
    },
    initList: () => {
      dispatch(charactersActions.getList());
    },
    setItem: value => {
      dispatch(charactersActions.setItem(value));
    },
  };
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connectFunction(Component);

export default connectedComponent;
