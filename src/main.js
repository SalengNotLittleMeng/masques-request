import HttpFactory from './http/httpFactory';
import { cancleRepeatPlugin } from './plugin/cancleRepeat/index';
import { loadingPlugin } from './plugin/loading/index';
import { setHook, useHook } from './hooks/index';
import { registerHooks } from './hooks/hooks';
export default class MasquesRequest {
  constructor(options) {
    this.options = options;
    registerHooks();
    this.useDefaaultPlugin();
    useHook('beforeHttpCreated', options);
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
  useDefaaultPlugin() {
    const DefaaultPlugin = [cancleRepeatPlugin, loadingPlugin];
  }
  use(plugin) {
    Object.keys(plugin).forEach((hook) => {
      setHook(hook, plugin[hook]);
    });
  }
}
