import {Alert} from 'react-native';
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

export const getList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const charactersResponse = await api.getCharacters(0, 20);

      const list =
        charactersResponse.data?.data?.results.map(character => {
          return {
            ...character,
            imageUrl: `${character.thumbnail?.path}/portrait_fantastic.${character.thumbnail?.extension}`,
          };
        }) || [];
      console.log({list});
      dispatch(setList(list));
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
