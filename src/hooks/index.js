// 订阅发布模式，注册生命周期钩子
class EventBus {
  constructor() {
    this.event = {};
  }
  emit(eventName, func) {
    if (this.event[eventName]) {
      this.event[eventName].push(func);
    } else {
      this.event[eventName] = [func];
    }
  }
  on(eventName, ...args) {
    if (!this.event[eventName]) {
      throw Error('no Event');
    } else {
      this.event[eventName].forEach((func) => {
        func(...args);
      });
    }
  }
}
const $bus = new EventBus();
export const useHook = $bus.on.bind($bus);
export const setHook = $bus.emit.bind($bus);
