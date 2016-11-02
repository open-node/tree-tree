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
    keywords: ['宝马', 'BMW'],
    children: [{
      name: '3系',
      keywords: ['3系', '3 系']
    }, {
      name: '5系',
      keywords: ['5系', '5 系']
    }, {
      name: '7系',
      keywords: ['7系', '7 系']
    }]
  }, {
    name: '奔驰',
    keywords: ['奔驰', 'Benz', 'benz', '宾士'],
    children: [{
      name: 'SUV',
      keywords: ['gla', 'glc', 'gle', 'gls']
    }, {
      name: '轿车',
      keywords: ['E级', 'C级', 'A级']
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
