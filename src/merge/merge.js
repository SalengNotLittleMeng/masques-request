// 合并配置和处理默认配置相关的类
export default class Merge {
  constructor() {}
  // 浅层合并
  mergeObjectOptions(parentConfig, childConfig) {
    return Object.assign(parentConfig, childConfig);
  }
  // 获取默认的请求配置
  getRequestDefaultOptions() {
    return {
      method: 'post',
      type: 'json',
      repeat_request_cancel: true,
    };
  }
  // 获取默认的axios配置
  getAxiosDefaultOptions() {
    return {
      timeout: 5000,
      baseUrl: '',
    };
  }
  // 合并axios默认请求
  mergeAxiosDefaultOptons(config = {}) {
    return this.mergeObjectOptions(this.getAxiosDefaultOptions(), config);
  }
  // 合并请求默认配置
  mergeRequestDefaultOptons(config = {}) {
    return this.mergeObjectOptions(this.getRequestDefaultOptions(), config);
  }
}
