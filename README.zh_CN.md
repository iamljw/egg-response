# egg-response

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-response.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-response
[travis-image]: https://img.shields.io/travis/eggjs/egg-response.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-response
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-response.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-response?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-response.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-response
[snyk-image]: https://snyk.io/test/npm/egg-response/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-response
[download-image]: https://img.shields.io/npm/dm/egg-response.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-response

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-response 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

## 安装

```bash
$ npm i egg-response --save
```

## 开启插件

```js
// config/plugin.js
exports.response = {
  enable: true,
  package: 'egg-response',
};
```
## 在哪里使用
```js
// {app_root}/app/controller/post.js

ctx.successful(data[,code]);

// 或

ctx.failed([message[,code]]);
```
## API
### ctx.successful(data[,code])
>创建一个成功的响应

参数  
  - **data** -响应返回的数据
  - **code(可选)** -响应状态码,默认值是 `200`

返回值  
  - **将会是json格式,如下:**
```json
{
  "success":true,
  "data":"String,Object,Array,int...任何你想要返回的数据 "
}
```

### ctx.failed([message[,code]])
>创建一个失败的响应

参数  
  - **message** -错误信息
  - **code(optional)** -响应状态码,默认值是 `422`

返回值  
  - **将会是json格式,如下:**
```json
{
  "success":false,
  "message":"任何你想返回的信息"
}
```

## 过时的(v1.1.0)

### ~~ctx.createSuccessResponse(data[,code])~~

**和**

### ~~ctx.createFailedResponse([message[,code]])~~

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。


## 提问交流

请到 [egg issues](https://github.com/iamljw/egg-response/issues) 异步交流。

## License

[MIT](LICENSE)
