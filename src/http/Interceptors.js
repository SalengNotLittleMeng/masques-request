import { addToken, addAuth } from '../utils/addConfig';
import { errorCallBack } from '../Error/errorHandler';
// 处理拦截器的类
export default class Interceptor {
  constructor(instance) {
    this.instance = instance;
  }
  request(success, error = errorCallBack) {
    this.instance.interceptors.request.use(success, error);
  }
  response(success, error = errorCallBack) {
    this.instance.interceptors.response.use(success, error);
  }
  // 添加工具配置的拦截器
  addUtilsConfig(options = {}) {
    this.request(function (config) {
      // 添加token
      addToken(config, options);
      // 添加auth
      addAuth(config, options);
      return config;
    });
  }
}
