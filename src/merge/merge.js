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
    };
  }
  // 获取默认的axios配置
  getAxiosDefaultOptions() {
    return {
      timeout: 5000,
      baseUrl: '',
    };
  }
  mergeAxiosDefaultOptons(config = {}) {
    return this.mergeObjectOptions(this.getAxiosDefaultOptions(), config);
  }
  mergeRequestDefaultOptons(config = {}) {
    return this.mergeObjectOptions(this.getRequestDefaultOptions(), config);
  }
}
