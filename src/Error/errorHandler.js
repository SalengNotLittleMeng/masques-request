export default class ErrorHandler {
  constructor(options) {
    const { errorStateMap } = options.errorHandler;
    this.errorStateMap = errorStateMap;
    this.errorStateMap['default'] = this.errorStateMap['default'] || '好像出了一点问题哦';
  }
  responseErrorStatusHandler(response, error) {
    if (response) {
      // 请求不成功但返回结果
      const errorStateHandler=this.errorStateMap['state'][response.status] || this.errorStateMap['state']['default'];
      errorStateHandler(response,error)
    } else {
      // 服务器完全没有返回结果（网络问题或服务器崩溃）
      if (!window.navigator.onLine) {
       this.errorStateMap['outLine'](error)
      } else {
        //   ElMessage.error('服务器维护中，请稍后再试');
       this.errorStateMap['other'](error)
      }
    }
  }
}
