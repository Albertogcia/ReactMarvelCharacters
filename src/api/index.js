import axios from 'axios';
import {API_URL, API_KEY, API_HASH, API_TS} from '../config/api';

const aInstance = axios.create({
  baseURL: API_URL,
  headers: {'Content-Type': 'application/json'},
  params: { apikey: API_KEY, ts: API_TS, hash: API_HASH}
});

export const getCharacters = (offset, limit) => {
  const url = '/v1/public/characters';
  return aInstance.get(url, {offset: offset, limit: limit});
};
