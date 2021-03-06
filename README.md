# egg-response

English|[中文](./README.zh_CN.md)

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

## Dependency Description

### Dependent egg version

Egg-response version | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

## Installation

```bash
$ npm i egg-response --save
or
$ yarn add egg-response
```

## Open the plugin

```js
// config/plugin.js
exports.response = {
  enable: true,
  package: 'egg-response',
};
```
## Where to use
```js
// {app_root}/app/controller/post.js

ctx.successful(data[,options]);

// or

ctx.failed([options]);
```
## API
### ctx.successful(data[,options])
>Create a successful response

Parameter  
  - **data** - the data returned by the response
  - **options (optional)** -`Object` with the following optional attributes:  
    - isData -`boolean`, whether to return data, the default value is `true`,If set to false, the returned json field `data` will be replaced by `message`
    - code -`int`, response status code, default value is `200`
    - extra -`Object`, additional information

Example  
``` js
ctx.successful([1,2,3],{
  extra: {
    xxx: 'Additional message'
  }
});
```  
  - Returns the result, **will be in json format, as follows:**  
```json
{
  "success": true,
  "code": 200,
  "data": [1,2,3],
  "xxx": "Additional message"
}
```

### ctx.failed([options])
>Create a failed response

Parameter  
  - **options (optional)** -`Object` with the following optional attributes:
    - message - error message, default value is 'Request error'
    - code - response status code, default value is `500`
    - extra - append message

Example  
```js
ctx.failed({ message: 'There is no such category' });
```
  - Returns the result,**will be in json format, as follows:**  
```json
{
  "code": 500,
  "success": false,
  "message": "There is no such category"
}
```

## Outdated (v1.1.0)

### ~~ctx.createSuccessResponse(data[,code])~~

**with**

### ~~ctx.createFailedResponse([message[,code]])~~

## Detailed configuration

Go to [config/config.default.js](config/config.default.js) for detailed configuration item descriptions.


## Asking questions

Please go to [egg issues] (https://github.com/iamljw/egg-response/issues) for asynchronous communication.

## License

[MIT](LICENSE)