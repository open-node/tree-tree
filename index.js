var chars = {
  space: '    ',
  pre: '│   ',
  first: '├── ',
  last: '└── '
};

var toString = function(tree, p, last) {
  var pre = p || '';
  var strings = [pre + tree.name];
  var _pre = '';
  var lastIndex;
  if (tree.children && tree.children.length) {
    lastIndex = tree.children.length - 1;
    if (pre) {
      _pre = last ? chars.space : chars.pre;
    }
    strings = strings.concat(tree.children.map(function(x, index) {
      var _last = index === lastIndex;
      return toString(x, _pre + (_last ? chars.last : chars.first), _last);
    }));
  }
  return strings.join('\n');
};

module.exports = toString;
