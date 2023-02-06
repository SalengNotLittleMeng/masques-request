import { setHook } from './index';
// 可调用的全部生命周期
const hooks = ['beforeHttpCreated', 'beforeCreateRequsetFunction'];
// 注册所有钩子
export function registerHooks() {
  hooks.forEach((hook) => {
    setHook(hook, () => {});
  });
}
