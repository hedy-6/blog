# 模块化

## CommonJS

```
//add.js
const add = (a, b) => a + b
module.exports = add
//index.js
const add = require('./add')
add(1, 5)
```

## AMD

```
//add.js
define(function() {
  const add = (a, b) => a + b
  return add
})
//index.js
require(['./add'], function (add) {
  add(1, 5)
})
```

## ESM

```
//add.js
const add = (a, b) => a + b
export default add
//index.js
import add from './add'
add(1, 5)
```
