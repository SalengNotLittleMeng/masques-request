import {addToken,addAuth} from '../utils/addConfig'
const errorCallBack=(error)=>{
  return Promise.reject(error)
}
export default class Interceptor {
  constructor(instance) {
    this.instance = instance;
  }
  request(success, error=errorCallBack) {
    this.instance.interceptors.request.use(success, error);
  }
  response(success, error=errorCallBack) {
    this.instance.interceptors.response.use(success, error);
  }
  addUtilsConfig(options={}){
    this.request(function(config){
    // 添加token
    addToken(config,options)
    // 添加auth
    addAuth(config,options)
 })
}
}