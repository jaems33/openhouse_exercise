import BackendAPI from './Client'
import { HOMES } from '../constants/paths'

export const getHomes = async () => {
  const api = new BackendAPI();
  const response = await api.get(HOMES);
  return response.data;
}
