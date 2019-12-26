# nuxt_191218

> My breathtaking Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

-------------


```
λ npx create-nuxt-app nuxt_191218

create-nuxt-app v2.12.0
✨  Generating Nuxt.js project in nuxt_191218
? Project name nuxt_191218
? Project description My breathtaking Nuxt.js project
? Author name Nelson.Huang
? Choose the package manager Npm
? Choose UI framework Element
? Choose custom server framework None (Recommended)
? Choose Nuxt.js modules Axios
? Choose linting tools (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Choose test framework None
? Choose rendering mode Universal (SSR)
? Choose development tools jsconfig.json (Recommended for VS Code)
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number
of issues. Please, upgrade your dependencies to the actual version of core-js@3.
```

```
 Successfully created project nuxt_191218

  To get started:

        cd nuxt_191218
        npm run dev

  To build & start for production:

        cd nuxt_191218
        npm run build
        npm run start


D:\RD_2019\WebSite\MyFrontendPractice (master -> origin)
λ
```

> nuxt.config.js

```
npm install sass-loader node-sass --save
```
## CSS 配置

在 Nuxtjs 里配置全局的 CSS 文件、模块、库。 (每个页面都会被引入)

如果要使用 sass 就必须要安装 node-sass和sass-loader 。

Nuxt.js 会自动识别被导入文件的扩展名，之后，webpack 会使用相应的预处理器进行处理。

前提是，你安装了对应预处理器。


**Reference**

https://zh.nuxtjs.org/api/configuration-css


### Install

```
npm install --save-dev node-sass sass-loader
```

### Config

> nuxt.config.js

```
module.exports = {
  css: [
    // 直接加载一个 Node.js 模块。（在这里它是一个 Sass 文件）
    'bulma',
    // 项目里要用的 CSS 文件
    '@/assets/css/main.css',
    // 项目里要使用的 SCSS 文件
    '@/assets/css/main.scss'
  ]
}
```

## 中間件

**Reference**

https://zh.nuxtjs.org/guide/routing#%E4%B8%AD%E9%97%B4%E4%BB%B6

[實際範例](https://github.com/nuxt/example-auth0)

> middleware/auth.js

```
export default function (context) {
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
```

> nuxt.config.js

```
module.exports = {
  router: {
    middleware: 'auth'
    
  }
}
```

**将 middleware 添加到指定的布局或者页面**
例如，在 orders/index 中，添加中間件 auth


> orders/index.vue

```
<template>
  <div>
    <h1>orders::index</h1>
  </div>
</template>
<script>
export default {
  middleware: 'auth'
}
</script>
<style scoped>

</style>
```

# popper.js

**Reference**
https://popper.js.org/index.html
https://github.com/popperjs/popper.js
https://www.youtube.com/watch?v=V1JOH4kS6Pc

**Install**

```
npm install popper.js --save
```

# moment.js

## Reference
[moment.js - 關於時間的一切 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10208995)

## install

```
npm install moment --save
```


---------

# localforage

```
localForage

改进的离线存储

// 通过 localStorage 设置值
localStorage.setItem('key', JSON.stringify('value'));
doSomethingElse();

// 通过 localForage 完成同样功能
localforage.setItem('key', 'value').then(doSomethingElse);

// localForage 同样支持回调函数
localforage.setItem('key', 'value', doSomethingElse);

localForage 是一个 JavaScript 库，通过简单类似 localStorage API 的异步存储来改进你的 Web 应用程序的离线体验。它能存储多种类型的数据，而不仅仅是字符串。

localForage 有一个优雅降级策略，若浏览器不支持 IndexedDB 或 WebSQL，则使用 localStorage。在所有主流浏览器中都可用：Chrome，Firefox，IE 和 Safari（包括 Safari Mobile）。

localForage 提供回调 API 同时也支持 ES6 Promises API，你可以自行选择。
```


## Reference

[localForage 中文文档](https://localforage.docschina.org/)

[localForage](https://localforage.github.io/localForage/)

[localforage - npm](https://www.npmjs.com/package/localforage)

[localForage](https://localforage.github.io/localForage/#data-api-setitem)

[突破本地离线存储5M限制的JS库localforage简介 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2018/06/js-localforage-localstorage-indexdb/)

## Installation

```
npm install localforage
```

```
<script src="localforage.js"></script>
```

## Basic Usage in Vue/Nuxt

```
<template>
  <div>
    <h1>Index</h1>
        <p>{{ msg }}</p>
        <button @click="clickHandler">click</button>   
  </div>
</template>
<script>
import localforage from 'localforage'

export default {
    data(){
        return {
            msg: 'default'
        }
    },
    methods:{
        clickHandler(){
            localforage.getItem('somekey',null).then((value)=>{
                this.msg=value;
            });
        }
    },
    mounted(){
        localforage.setItem('somekey', 'some value').then((value)=>{
            // this.msg=value;
        }
        ).catch(function(err) {
            // This code runs if there were any errors
            console.log(err);
        });

    }
}
</script>
```


