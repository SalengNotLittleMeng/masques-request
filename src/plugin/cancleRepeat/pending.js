import axios from 'axios';
export default class Pending {
  constructor() {
    this.pendingMap = new Map();
  }
  getPendingKey(config) {
    return getPendingKey(config);
  }
  // 存储每个键的值
  addPending(config) {
    const pendingKey = this.getPendingKey(config);
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!this.pendingMap.has(pendingKey)) {
          this.pendingMap.set(pendingKey, cancel);
        }
      });
  }
  // 删除取消重复请求
  removePending(config, delKey = false) {
    const pendingKey = this.getPendingKey(config);
    if (delKey) {
      return;
    }
    if (this.pendingMap.has(this.pendingKey)) {
      const cancelToken = this.pendingMap.get(pendingKey);
      cancelToken(pendingKey);
      this.pendingMap.delete(pendingKey);
    }
  }
}
/**
 * 生成每个请求唯一的键
 * @param {*} config
 * @returns string
 */
function getPendingKey(config) {
  const { url, method, params } = config;
  let { data } = config;
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch {
      // catch部分处理表单格式的参数
      return;
    }
  } // response里面返回的config.data是个字符串对象
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&');
}
