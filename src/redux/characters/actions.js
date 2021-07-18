import {Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as types from './types';
import * as api from '../../api';

export const setLoading = (loading = false) => {
  const action = {
    type: types.UPDATE_CHARACTERS_LOADING,
    payload: {loading},
  };
  return action;
};

export const setList = (list = []) => {
  const action = {
    type: types.UPDATE_CHARACTERS_LIST,
    payload: {list},
  };
  return action;
};

export const setItem = item => {
  const action = {
    type: types.UPDATE_CHARACTERS_ITEM,
    payload: {item},
  };
  return action;
};

export const addNewCharacter = character => {
  const action = {
    type: types.ADD_NEW_CHARACTER,
    payload: {character}
  }
  return action;
}

export const getCharacters = (offset, limit) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const charactersResponse = await api.getCharacters(offset, limit);
      const list =
        charactersResponse.data?.data?.results.map(character => {
          return {
            ...character,
            imageUrl: `${character.thumbnail?.path}/portrait_fantastic.${character.thumbnail?.extension}`,
          };
        }) || [];
        if(offset != 0){
          dispatch(setList(getState().characters.list.concat(list)));
        }
        else{
          dispatch(setList(list));
        }
    } catch (e) {
      Alert.alert(
        'Error',
        e.message || 'Ha ocurrido un error obteniendo los datos',
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const postNewCharacter = data => {
  return async (dispatch, getState) => {
    let character = {
      id : Math.floor(Math.random() * 1000) + 1,
      imageUrl: data.image,
      name: data.name,
      description: data.description,
    }
    dispatch(addNewCharacter(character))
    Actions.pop()
  };
};
