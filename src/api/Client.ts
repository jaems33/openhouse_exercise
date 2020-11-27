import axios, { AxiosResponse } from 'axios';
import { BASEURL } from '../constants/paths'

export default class ClientAPI {
  baseUrl: string;
  constructor() {
    this.baseUrl = BASEURL;
  }
  async get(url: string, params = {}): Promise<AxiosResponse<any>> {
    try {
      const response = await axios.get<any[]>(this.baseUrl + url);
      return response;
    } catch (exception) {
      throw (exception);
    }
  }
}