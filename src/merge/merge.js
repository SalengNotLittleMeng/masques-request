export default class Merge{
    constructor(){}
    mergeObjectOptions(parentConfig,childConfig){
      return  Object.assign(parentConfig, childConfig);
    }
    getRequestDefaultOptions(){
        return {
            method: 'post',
            type: 'json',
        }
    }
    mergeRequestDefaultOptons(config){
      return  this.mergeObjectOptions(this.getRequestDefaultOptions(),config)
    }
}