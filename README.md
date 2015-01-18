node-evalin
===============

Eval.in API reverse engineered for Node.js

## Installing

```bash
$ npm install --save evalin
```

## Usage

```javascript
var evalin = require('evalin');

evalin('print "test"', 'python/cpython-2.7.8').then(function(res) {
  console.log(res.output);
});
```

## License

MIT
