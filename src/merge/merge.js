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
    getAxiosDefaultOptions(){
      return {
        timeout:5000,
        baseUrl:''
      }
    }
    mergeAxiosDefaultOptons(config={}){
      return  this.mergeObjectOptions(this.getAxiosDefaultOptions(),config)
    }
    mergeRequestDefaultOptons(config={}){
      return  this.mergeObjectOptions(this.getRequestDefaultOptions(),config)
    }
}