// 支持并发请求
export function httpExtendAll($http) {
  $http.all = function (configs, usePrimaryPromise = true) {
    if (!Array.isArray(configs)) {
      throw TypeError('configs shoudle be a array');
    }
    const ajaxList = configs.map((config) => {
      return function (config) {
        return $http(config);
      };
    });
    if (usePrimaryPromise) {
      return Promise.all(ajaxList);
    } else {
      return PromiseAll(ajaxList);
    }
  };
}
// 重写promsie.all的方法，即使错误也会保留结果
function PromiseAll(array) {
  if (!array instanceof Array) {
    throw TypeError('need array');
  }
  return new Promise(function (resovle, reject) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      Promise.resolve(array[i])
        .then((res) => {
          if (result.length == array.length) {
            resovle(result);
          }
          result[i] = res;
        })
        .catch((err) => {
          result[i] = err.message;
        });
    }
  });
}
