# tree-tree

## Usage
<pre>npm install tree-tree --save</pre>

## Example
```js
var tree = require('tree-tree');
var data = {
  name: 'Results',
  children: [{
    name: '宝马',
    children: [{
      name: '3系'
    }, {
      name: '5系'
    }, {
      name: '7系'
    }]
  }, {
    name: '奔驰',
    children: [{
      name: 'SUV'
    }, {
      name: '轿车'
    }]
  }]
};
console.log(tree(data));
/** Output
Results
├── 宝马
│   ├── 3系
│   ├── 5系
│   └── 7系
└── 奔驰
    ├── SUV
    └── 轿车
 */
```
