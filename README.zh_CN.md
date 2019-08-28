# egg-response

[English](./README.md)|中文

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
$ npm i egg-response
或者
$ yarn add egg-response
```

## 开启插件

```js
// config/plugin.js
exports.response = {
  enable: true,
  package: 'egg-response',
};
```
## 使用场景
```js
// {app_root}/app/controller/post.js

ctx.successful(data[,options]);

// 或者

ctx.failed([options]);
```
## API
### ctx.successful(data[,options])
>创建一个成功的响应

参数  
  - **data** -响应返回的数据
  - **options(可选)** -`Object`，有以下可选属性:
    - isData -`boolean`,是否返回数据，默认值为`true`,如果设置为false，返回的json字段`data`会被`message`替代
    - code -`int`，响应状态码，默认值为`200`
    - extra -`Object`，附加信息

示例  
``` js
ctx.successful([1,2,3],{
  extra: {
    xxx: '追加的消息'
  }
});
```
  - 返回结果，**将会是json格式,如下:**
```json
{
  "code": 200,
  "success": true,
  "data": [1,2,3],
  "xxx": "追加的消息"
}
```

### ctx.failed([options])
>创建一个失败的响应

参数  
  - **options(可选)** -`Object`,有以下可选属性：
    - message -错误提示信息，默认值为'Request error'
    - code -响应状态码，默认值为`500`
    - extra -追加消息

示例  
```js
ctx.failed({ message:'没有该类目' });
```
  - 返回结果，**将会是json格式,如下:**
```json
{
  "code": 500,
  "success": false,
  "message": "没有该类目"
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
