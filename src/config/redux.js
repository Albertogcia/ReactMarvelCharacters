import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import charactersReducer from '../redux/characters/reducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
