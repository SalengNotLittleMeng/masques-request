import HttpFactory from "./http/httpFactory"

export default class  MasquesRequest{
    constructor(options){
        this.httpFactory=new HttpFactory(options)
        this.$http=this.httpFactory.create()

    }
    install(Vue){
        if(Vue.prototype){
            Vue.prototype.$http=this.$http
        }else{
            Vue.config.globalProperties.$http=this.$http
        }
    }
}