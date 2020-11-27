import BackendAPI from './Client'
import { COMMUNITIES } from '../constants/paths'

export const getCommunities = async () => {
  const api = new BackendAPI();
  const response = await api.get(COMMUNITIES);
  return response.data;
}
