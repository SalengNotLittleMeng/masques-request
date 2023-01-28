import { App } from 'vue'
import {$http} from './http.js'
interface Module{
    default:any
}
export default class  MasquesRequest{
    public options:any
    constructor(options:any){
        this.options=options
    }
    install(Vue:App):void{
        Vue.config.globalProperties.$http=$http
    }
}