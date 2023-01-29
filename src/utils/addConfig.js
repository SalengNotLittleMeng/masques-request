// 对请求头添加token
export function addToken(config, options = {}) {
  const token = options.tokenName && localStorage.getItem(options.tokenName);
  if (token && typeof window !== 'undefined') {
    config.headers[options.headerToken] = token;
  }
}
// 对请求配置auth
export function addAuth(config, options = {}) {
  if (options.auth) {
    options.auth && (config.auth = options.auth);
  }
}
