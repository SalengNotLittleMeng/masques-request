import { httpExtendAll } from './all';
// 这个方法扩展了最后返回的请求实例
export function extendHttpMethods(http) {
  httpExtendAll(http);
}
