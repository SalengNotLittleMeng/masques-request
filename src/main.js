import HttpFactory from './http/httpFactory';

export default class MasquesRequest {
  constructor(options) {
    this.options = options;
    this.httpFactory = new HttpFactory(options);
  }
  createRequestFunction(options = {}) {
    return new HttpFactory(Object.assign(options, this.options)).create();
  }
  install(Vue) {
    const $http = this.httpFactory.create();
    if (Vue.prototype) {
      Vue.prototype.$http = $http;
    } else {
      Vue.config.globalProperties.$http = $http;
    }
  }
}
