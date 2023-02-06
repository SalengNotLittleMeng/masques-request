import { setHook } from './index';
const hooks = ['beforeHttpCreated', 'beforeCreateRequsetFunction'];
export function registerHooks() {
  hooks.forEach((hook) => {
    setHook(hook, () => {});
  });
}
