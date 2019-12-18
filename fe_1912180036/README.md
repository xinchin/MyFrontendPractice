
## 安裝

```
npm i -D webpack webpack-cli
```

```
npx webpack --config webpack.config.js
```

## Babel Loader

**install**

```
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

**Use**

```
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

## jQuery

**install**

```
npm install jquery
```



