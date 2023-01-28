import axios from 'axios';
import Interceptor from './Interceptors';
export default class HttpFactory {
  constructor(options) {
    this.instance = axios.create(options);
    this.interceptor = new Interceptor(this.instance);
    this.interceptor.addUtilsConfig(options);
  }
  setRequestInterceptors(success, error) {
    this.interceptor.request(success, error);
  }
  setResponseInterceptors(success, error) {
    this.interceptor.response(success, error);
  }
  create(options) {
    return this.instance;
  }
}
