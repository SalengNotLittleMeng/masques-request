import { addToken, addAuth } from '../utils/addConfig';
import { errorCallBack } from '../Error/errorHandler';
// 处理拦截器的类
export default class Interceptor {
  constructor(instance) {
    this.instance = instance;
    this.interceptorsRequest = [];
    this.interceptorsResponse = [];
  }
  // 添加请求拦截器
  addRequestInterceptors(success, error = errorCallBack) {
    this.interceptorsRequest.unshift({ success, error });
  }
  // 添加响应拦截器
  addResponseInterceptors(success, error = errorCallBack) {
    this.interceptorsResponse.push({ success, error });
  }
  // 使用所有拦截器，由于要考虑插件情况所以需要多封装一层
  useAllInterceptors() {
    this.getResponseDataInterceptor();
    this.interceptorsRequest.forEach((interceptor) => {
      this.instance.interceptors.request.use(...Object.values(interceptor));
    });
    this.interceptorsResponse.forEach((interceptor) => {
      this.instance.interceptors.response.use(...Object.values(interceptor));
    });
  }
  // 添加工具配置的拦截器
  addUtilsConfig(options = {}) {
    this.addRequestInterceptors(function (config) {
      // 添加token
      addToken(config, options);
      // 添加auth
      addAuth(config, options);
      return config;
    });
  }
  // 过滤请求配置，这个方法应该是最后执行的响应拦截器
  getResponseDataInterceptor() {
    this.addResponseInterceptors((config) => {
      return config.data;
    });
  }
}
