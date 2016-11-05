var chars = {
  space: '    ',
  pre: '│   ',
  first: '├── ',
  last: '└── '
};

var toString = function(tree, pre) {
  var string = [], childrenPre = [];
  tree.forEach(function(node, index) {
    var last = index === tree.length - 1;
    string.push([].concat(pre, last ? chars.last : chars.first, node.name).join(''));
    if (node.children && node.children.length) {
      if (pre.length) {
        childrenPre = pre.concat(last ? chars.space : chars.pre);
      } else {
        childrenPre = [last ? chars.space: chars.pre];
      }
      string = string.concat(toString(node.children, childrenPre));
    }
  });
  return string;
};

module.exports = function(tree) {
  var string = [tree.name];
  if (tree.children && tree.children.length) {
    string = string.concat(toString(tree.children, []));
  }
  return string.join('\n');
};
