# @masques/request

## 简介

masques 中的内置的请求层模块，可以通过配置化的方式实现取消重复请求，断线重连，参数统一，携带 token,自定义接入 loading 动画等，且支持自定义插件接入

Vue3 脚手架的整体功能集成模板：：https://github.com/SalengNotLittleMeng/masques

项目 GitHub 地址：https://github.com/SalengNotLittleMeng/masques-directives

## 使用：

npm 安装:

```shell
    npm i @masques/request
```

yarn 安装:

```shell
   yarn add @masques/request
```

在 Vue 中使用

```js
import MasquesRequest '@masques/request'
...
Vue.use(new MasquesRequest(
    tokenName:'token',
    tokenHeader:'tokenHeader'，
    auth:{
        username:'test',
        password:'password'
    },
    errorHandler:{
       state:{
         400:()=>{}
       },
       outLine:()=>{

       },
       other:()=>{}
    },
    loading:{
        service:()=>{

        }
        close:()=>{

        }
    }
));
```

## 具体功能实例：
