import axios from 'axios';
import Interceptor from './Interceptors';
import Qs from 'qs';
import Merge from '../merge/merge';
export default class HttpFactory {
  constructor(options = {}) {
    this.merge = new Merge();
    this.instance = axios.create(this.merge.getAxiosDefaultOptions(options.axiosOptions));
    this.interceptor = new Interceptor(this.instance);
    this.interceptor.addUtilsConfig(options);
  }
  setRequestInterceptors(success, error) {
    this.interceptor.request(success, error);
  }
  setResponseInterceptors(success, error) {
    this.interceptor.response(success, error);
  }
  setRequestHeadConfig(config) {
    const Type = config.type;
    const requestTypeStrategyPond = {
      json: (config) => {
        config.headers = {
          'Content-Type': 'application/json',
        };
      },
      formData: (config) => {
        config.headers = {
          'Content-Type': 'multipart/form-data',
        };
        const params = config.data;
        let newParams = null;
        if (params) {
          newParams = new FormData();
          for (const i in params) {
            newParams.append(i, params[i]);
          }
        }
        config.data = newParams;
      },
      urlencoded: (config) => {
        config.headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        config.transformRequest = [
          (data) => {
            return Qs.stringify(data);
          },
        ];
      },
    };
    requestTypeStrategyPond[Type](config);
    return config;
  }
  setConfigFunctionLine(config) {
    const processLine = [
      this.merge.mergeRequestDefaultOptons.bind(this.merge),
      this.setRequestHeadConfig,
      (config) => {
        if (config.method === 'get') {
          config.params = config.data;
        }
        return config;
      },
    ];
    return processLine.reduce((before, after, index) => {
      return processLine[index](before);
    }, config);
  }
  create() {
    const that = this;
    return function (config) {
      config = that.setConfigFunctionLine(config);
      return that.instance(config);
    };
  }
}
