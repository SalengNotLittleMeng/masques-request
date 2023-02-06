export default class Loading {
  constructor(options = {}) {
    this.count = 0;
    this.current = null;
    this.options = options;
  }
  setDefaultOpotions(options) {
    this.options = options;
  }
  closeLoadingItem(response) {
    if (this.count > 0) {
      this.count--;
    }
    if (this.count === 0) {
      this.current.close && this.current.close(response);
      this.current = null;
    }
  }
  addLoadingItem(config) {
    if (config.loading) {
      this.count++;
      if (this.count === 1 && config.loading.service) {
        this.current = config.loading.service(Object.assign(this.options, config.loading));
      }
    }
  }
}
