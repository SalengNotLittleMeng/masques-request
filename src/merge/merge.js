export default class Merge{
    constructor(){}
    mergeObjectOptions(parentConfig,childConfig){
        Object.assign(parentConfig, childConfig);
    }
    getRequestDefaultOptions(){
        return {
            method: 'post',
            type: 'json',
        }
    }
}