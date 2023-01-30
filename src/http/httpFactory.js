import axios from 'axios';
import Interceptor from './Interceptors';
import Qs from 'qs';
import Merge from '../merge/merge';
import { HttpHeaderTypeStrategyPond } from './httpHeader';
// 创建http请求对象的工厂函数
export default class HttpFactory {
  constructor(options = {}) {
    this.merge = new Merge();
    this.instance = axios.create(this.merge.getAxiosDefaultOptions(options.axiosOptions));
    this.interceptor = new Interceptor(this.instance);
    this.interceptor.addUtilsConfig(options);
  }
  // 设置请求拦截器
  setRequestInterceptors(success, error) {
    this.interceptor.addRequestInterceptors(success, error);
  }
  // 设置响应拦截器
  setResponseInterceptors(success, error) {
    this.interceptor.addResponseInterceptors(success, error);
  }
  // 重新设置请求头
  setRequestHeadConfig(config) {
    const Type = config.type;
    const requestTypeStrategyPond = HttpHeaderTypeStrategyPond;
    requestTypeStrategyPond[Type](config);
    return config;
  }
  // 为了确保处理顺序的可维护性，这里采用职责链遍历
  setConfigFunctionLine(config) {
    const processLine = [
      this.merge.mergeRequestDefaultOptons.bind(this.merge),
      this.setRequestHeadConfig,
      (config) => {
        // 抹平请求方法参数的差异
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
  // 返回请求实例
  create() {
    const that = this;
    this.interceptor.useAllInterceptors();
    return function (config) {
      config = that.setConfigFunctionLine(config);
      return that.instance(config);
    };
  }
}
