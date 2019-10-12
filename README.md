# http-client
An http client for JavaScript, for use with the Bristol SU portal.

Exports an instance of axios, with a few settings. These settings help make the integration between the Bristol SU portal and your module easier, allowing you to use your module API as if it were a standalone app.

## Installation
```npm install bristol-su/http-client```

## Usage
In the top of your .js file, import the package
```js
import http from 'http-client';
```

We highly recommend binding the client to your Vue prototype, so that any future changes will only have to be changed in your .js file
```javascript
Vue.prototype.$http = http;
```
