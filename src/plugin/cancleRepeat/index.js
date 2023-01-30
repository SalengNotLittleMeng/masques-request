import Pending from './pending';

export const cancleRepeatPlugin = {
  beforeCreateInstance: function (vm) {
    console.log(vm);
  },
};
