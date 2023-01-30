export const HttpHeaderTypeStrategyPond = {
  json: (config) => {
    config.headers = {
      'Content-Type': 'application/json',
    };
  },
  // 这里抹平formData,urlencoded与json的配置差异，不论格式如何都传一个对象
  formData: (config) => {
    config.headers = {
      'Content-Type': 'multipart/form-data',
    };
    const params = config.data;
    let newParams = null;
    if (params) {
      newParams = new FormData();
      for (const i in params) {
        newParams.append(i, params[i]);
      }
    }
    config.data = newParams;
  },
  // urlencoded类型请求需要进行序列化操作
  urlencoded: (config) => {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    config.transformRequest = [
      (data) => {
        return Qs.stringify(data);
      },
    ];
  },
};
