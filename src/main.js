import HttpFactory from './http/httpFactory';
import { cancleRepeatPlugin } from './plugin/cancleRepeat/index';
import { loadingPlugin } from './plugin/loading/index';
import { setHook, useHook } from './hooks/index';
import { registerHooks } from './hooks/hooks';
export default class MasquesRequest {
  constructor(options) {
    this.options = options;
    // 注册生命周期钩子
    registerHooks();
    // 使用默认插件
    this.useDefaaultPlugin();
    // 创建http请求之前的钩子，用于获取配置或修改实例
    useHook('beforeHttpCreated', options, this);
    // 工厂创建请求实例
    this.httpFactory = new HttpFactory(options);
  }
  // 调用工厂函数，创建多实例
  createRequestFunction(options = {}) {
    return new HttpFactory(Object.assign(options, this.options)).create();
  }
  // 在Vue中注册为插件
  install(Vue) {
    const $http = this.httpFactory.create();
    if (Vue.prototype) {
      Vue.prototype.$http = $http;
    } else {
      Vue.config.globalProperties.$http = $http;
    }
  }
  // 使用默认插件
  useDefaaultPlugin() {
    const DefaaultPlugin = [cancleRepeatPlugin, loadingPlugin];
    DefaaultPlugin.forEach((plugin) => {
      this.use(plugin);
    });
  }
  // 调用自定义插件
  use(plugin) {
    Object.keys(plugin).forEach((hook) => {
      setHook(hook, plugin[hook]);
    });
  }
}
