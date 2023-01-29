import HttpFactory from "./http/httpFactory"

export default class  MasquesRequest{
    constructor(options){
        this.httpFactory=new HttpFactory(options)
        this.$http=this.httpFactory.create()

    }
    install(Vue){
        Vue.config.globalProperties.$http=this.$http
    }
}