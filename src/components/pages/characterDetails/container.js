import {connect} from 'react-redux';
import Component from './view';

const mapStateToProps = state => {
  return {
    character: state.characters.item,
  };
};

export default connect(mapStateToProps)(Component);