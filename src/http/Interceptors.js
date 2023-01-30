import { addToken, addAuth } from '../utils/addConfig';
import { errorCallBack } from '../Error/errorHandler';
// 处理拦截器的类
export default class Interceptor {
  constructor(instance) {
    this.instance = instance;
    this.interceptorsRequest = [];
    this.interceptorsResponse = [];
  }
  addRequestInterceptors(success, error = errorCallBack) {
    this.interceptorsRequest.unshift({ success, error });
  }
  addResponseInterceptors(success, error = errorCallBack) {
    this.interceptorsResponse.push({ success, error });
  }
  useAllInterceptors() {
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
}
