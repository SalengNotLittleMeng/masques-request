import HttpFactory from './http/httpFactory';
import { cancleRepeatPlugin } from './plugin/cancleRepeat/index';
import { setHook } from './hooks/index';
export default class MasquesRequest {
  constructor(options) {
    this.options = options;
    this.httpFactory = new HttpFactory(options);
    this.use(cancleRepeatPlugin);
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
  use(plugin) {
    Object.keys(plugin).forEach((hook) => {
      setHook(hook, plugin[hook]);
    });
  }
}
