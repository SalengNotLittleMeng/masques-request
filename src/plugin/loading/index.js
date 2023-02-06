import Loading from './loading';
const loading = new Loading();
// 取消重复请求的插件
export const loadingPlugin = {
  beforeHttpCreated: function (options) {
    loading.setDefaultOpotions(options.loading || {});
  },
  beforeCreateRequsetFunction: function (vm) {
    const { interceptor } = vm;
    interceptor.addRequestInterceptors(function (config) {
      console.log(config);
      loading.addLoadingItem(config);
      return config;
    });
    interceptor.addResponseInterceptors(
      function (response) {
        loading.closeLoadingItem(response);
        return response;
      },
      function (error) {
        loading.closeLoadingItem(response);
        return Promise.reject(error);
      }
    );
  },
};
