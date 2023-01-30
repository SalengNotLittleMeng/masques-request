import Pending from './pending';
const pending = new Pending();
// 取消重复请求的插件
export const cancleRepeatPlugin = {
  beforeCreateRequsetFunction: function (vm) {
    const { interceptor } = vm;
    interceptor.addRequestInterceptors(function (config) {
      config.repeat_request_cancel && pending.removePending(config, Boolean(config.retryTimes));
      pending.addPending(config);
      return config;
    });
    interceptor.addResponseInterceptors(
      function (response) {
        pending.removePending(response.config);
        return response;
      },
      function (error) {
        const { config, response } = error;
        config && pending.removePending(config, Boolean(config?.retryTimes));
        return Promise.reject(error);
      }
    );
  },
};
