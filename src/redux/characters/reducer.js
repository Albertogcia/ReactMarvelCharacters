import * as types from './types';

const initialState = {
  loading: false,
  list: [],
  item: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_CHARACTERS_LIST:
      return {
        ...state,
        list: action.payload?.list,
      };

    case types.UPDATE_CHARACTERS_LOADING:
      return {
        ...state,
        loading: action.payload?.loading,
      };

    case types.UPDATE_CHARACTERS_ITEM:
      return {
        ...state,
        item: action.payload?.item,
      };

    default:
      return state;
  }
};

export default reducer;
