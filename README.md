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
// token名称
    tokenName:'token',
// 请求头上的token名
    tokenHeader:'tokenHeader',
// 错误处理配置
    errorHandler:{
       state:{
         400:()=>{console.log('400错误')}
       },
       outLine:()=>{
        console.log('断网')
       },
       other:()=>{}
    },
//loading配置
    loading:{
        service:()=>{
            console.log('调用loading动画')
        }
        close:()=>{
            console.log('结束loading动画')
        }
    },
    //   重连配置
    retryCount:3,
    retryDelay:3000,
    plugins:[
    // 自定义插件
    ]
));
```
