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

--------

## sweetalert2

A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes

一个漂亮的、响应式的、可定制的和可访问（WAI-ARIA）的JavaScript弹窗

### Reference

[SweetAlert2 - a beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes](https://sweetalert2.github.io/)

[SweetAlert2中文 —— 一个漂亮的、响应式的、可定制的和可访问（WAI-ARIA）的JavaScript弹窗](http://mishengqiang.com/sweetalert2/)

### Installation

```
npm install sweetalert2
```


### Basic Usage

```
<template>
  <div>
    <h1>demo::sweetalert2</h1>
    <button @click="clickHandler">Click</button>
  </div>
</template>

<script>
import { default as Swal } from "sweetalert2";

export default {
  methods: {
    clickHandler() {
      Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: login => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .catch(error => {
              Swal.showValidationMessage(`Request failed: ${error}`);
            });
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then(result => {
        if (result.value) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          });
        }
      });
    }
  }
};
</script>
<style scoped></style>
```


---------
## dotenv

什麼是 dotenv ?

dotenv 是將 .env 文件中的環境參數加載到 process.env。


### Reference

[API: The env Property - NuxtJS](https://nuxtjs.org/api/configuration-env/)

[Node.js 使用 .env 加上環境變數 - 《Chris 技術筆記》](https://dwatow.github.io/2019/01-26-node-with-env-first/)

[[Node.js打造API] 設定joi與config dotenv環境參數 — 1010Code](https://andy6804tw.github.io/2018/01/01/joi-config-dotenv/)

[Day27 存取env變數使用dotenv-儲存敏感資訊 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10209126)

### Installation 

```
npm install dotenv
```


### Basic Usage in Nuxt.js

> nuxt.config.js

```
require('dotenv').config()
export default {
  mode: 'universal',

  env: {
    apiUrl: process.env.API_URL || 'http://localhost:9000/api',
    appName: process.env.APP_NAME || 'ARTCore',
    appLocale: process.env.APP_LOCALE || 'zh-TW',
    appDescription: '',
  },
}
```

> demo.vue

```
<template>
  <div>
    <h1>demo :: dotenv</h1>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: process.env.apiUrl
    };
  }
};
</script>
<style scoped></style>
```

------------

## vue-i18n

### Reference
[Nuxt.js国际化vue-i18n的搭配使用 - weiqinl - 博客园](https://www.cnblogs.com/weiqinl/p/10581867.html)

### Installation

```
npm install --save vue-i18n
```

### Basic Usage in Nuxt.js

**store文件**

> store\index.js

```
export const state = () => ({
  locales: ['en-US', 'zh-CN'],
  locale: 'en-US'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
```

**plugins文件**


> plugins\i18n.js

```
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en-US',
    messages: {
      'en-US': require('@/locales/en-US.json'),
      'zh-CN': require('@/locales/zh-CN.json')
    }
  })

  app.i18n.path = (link) => {
    // 如果是默认语言，就省略
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}
```

**middleware文件**

> middleware\i18n.js

```
export default function({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale
    // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
    // Get locale from params
  const locale = params.lang || defaultLocale
  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Set locale
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
    // If route is /<defaultLocale>/... -> redirect to /...
  if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
    const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    return redirect(
      route.fullPath.replace(re, '/')
    )
  }
}
```

**locales文件夹**


> locales\en-US.json

```
{
  "home": {
    "title": "welcome",
    "msg": "this is english"
  }
}
```

> locales\zh-CN.json

```
{
  "home": {
    "title": "歡迎",
    "msg": "這是中文"
  }
}
```

**nuxt.config.js文件**

> nuxt.config.js

```
  router: {
    middleware: 'i18n'
  },
  plugins: ['@/plugins/i18n.js'],
  generate: {
    routes: ['/', '/about', '/zh-CN', '/zh-CN/about']
  }
```

**應用的頁面**

> pages\demo\i18n.vue

```
<template>
  <div>
    <p>{{ $t('home.title') }}</p>
    <p>{{ $t('home.msg') }}</p>

    <p>{{ $t('home.title', 'zh-CN') }}</p>
    <p>{{ $t('home.msg', 'zh-CN') }}</p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
```

---------

## nuxt-fontawesome


### Reference

[【Nuxt教學】實作引用 Fontawesome 5 到Nuxt專案 | Hello Santa web design, drupal and more](https://www.hellosanta.com.tw/blog/how-to-use-fontawesome-5-to-nuxt-project)

[Font Awesome](https://fontawesome.com/)



### Installation

```
npm install nuxt-fontawesome
```

```
nelson.huang@wan014033 MINGW64 /d/RD_2019/WebSite/MyFrontendPractice/nuxt_191218 (dev_office)
$ npm install nuxt-fontawesome
npm WARN sass-loader@8.0.0 requires a peer of sass@^1.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN sass-loader@8.0.0 requires a peer of fibers@>= 3.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ nuxt-fontawesome@0.4.0
added 4 packages from 15 contributors and audited 11036 packages in 17.06s
found 0 vulnerabilities
```

```
// fas
npm install @fortawesome/free-solid-svg-icons

// far
npm install @fortawesome/free-regular-svg-icons 

// fab
npm install @fortawesome/free-brands-svg-icons


```

### 配置

**新增 plugin**

> plugins\font-awesome.js

```
import Vue from 'vue'
// the component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// icon 要使用的標籤名稱 <font-awesome-icon>
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
```

**配置文件** 

> nuxt.config.js

```
 plugins: [{
    src: '~/plugins/font-awesome'
  }],
  modules: [
    'nuxt-fontawesome',
  ],
  fontawesome: {
      // icon 的標籤使用 <fa>，這邊不設定就會依照 plugin 裡的設定<font-awesome-icon>
      component: 'fa', 
      imports: [
        // 引入 fas 所有的icon
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        // 只引入兩種特定的icon
        // 此為pro付費版的package，請注意
        {
          set: '@fortawesome/pro-regular-svg-icons',
          icons: ['faAdjust', 'faArchive']
        }
      ]
  }
  ```


### Basic Usage

**pages\demo\awesome.vue**

> pages\demo\awesome.vue

```
<template>
  <div>
    <fa :icon="['fab', 'fort-awesome']" />
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>

</style>
```

