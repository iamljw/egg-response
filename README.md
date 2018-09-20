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

## Install

```bash
$ npm i egg-response --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.response = {
  enable: true,
  package: 'egg-response',
};
```
## where to use
```js
// {app_root}/app/controller/post.js

ctx.successful(data[,code]);

// or

ctx.failed([message[,code]]);
```
## API
### ctx.successful(data[,code])
>create a successful response

Parameter  
  - **data** -response returned data
  - **code(optional)** -response status code,default value is `200`

return value  
  - **will be in json format,as follows:**
```json
{
  "success":true,
  "data":"String,Object,Array,int...Any data you want to return "
}
```

### ctx.failed([message[,code]])
>create a failed response

Parameter  
  - **message** -error message
  - **code(optional)** -response status code,default value is `422`

return value  
  - **will be in json format,as follows:**
```json
{
  "success":false,
  "message":"Any message you want to return"
}
```

## deprecated(v1.1.0)

### ~~ctx.createSuccessResponse(data[,code])~~

**and**

### ~~ctx.createFailedResponse([message[,code]])~~

## Configuration

```js
// {app_root}/config/config.default.js
exports.response = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.


## Questions & Suggestions

Please open an issue [here](https://github.com/iamljw/egg-response/issues).

## License

[MIT](LICENSE)
