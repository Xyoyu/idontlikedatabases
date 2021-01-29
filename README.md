# IDontLikeDatabases

## Introduction
Don't use this.

## Implementation
```js
var path = require('path'), { Database } = require('idontlikedatabases')
    , db = new Database(path.resolve('db.txt'))

var data = db.fetch()
data.hello = "world"
db.save(data)
var fetchedData = db.fetch()

// Output:
// {
//     hello: "world"
// }
```
