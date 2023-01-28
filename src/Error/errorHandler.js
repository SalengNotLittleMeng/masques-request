export default class ErrorHandler {
  constructor(options) {
    const { errorStateMap } = options.errorHandler;
    this.errorStateMap = errorStateMap;
    this.errorStateMap['default'] = this.errorStateMap['default'] || '好像出了一点问题哦';
  }
  responseErrorStatusHandler(response, error) {
    if (response) {
      // 请求不成功但返回结果
      let { errorText } = (error && error.config) || '';
      let errorTextDefault = this.errorStateMap[response.status] || this.errorStateMap['default'];
      errorText = errorText ? errorText : errorTextDefault;
      // ElMessage.error(errorText);
    } else {
      // 服务器完全没有返回结果（网络问题或服务器崩溃）
      if (!window.navigator.onLine) {
        // 断网处理，跳转404页面
        //   ElMessage.error('网络好像有一点问题哦~');
      } else {
        //   ElMessage.error('服务器维护中，请稍后再试');
      }
    }
  }
}
