# jsonp lib

最近朋友面试说了一个很有意思的事，一个公司面试官说他们用 axios, axios 不支持 jsonp 然后他们就引了个 jQuery. 朋友说了说，我们都感到好笑，为啥不用原生呢？


## `jsonp`

```js
const jsonp = require('jsonp'); // lib/jsonp.js
// jsonp(url, callback);
jsonp('http://localhost:3000/jsonptest','jsonpCallback');

//jsonp(url, config)
jsonp(url, { name: 's', 'callback'});
```