var assert = require('assert');
var tree = require('../index');
var fs = require('fs');

describe('Tree test', function() {
  it('Basic', function(done) {
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

    var string = tree(data);

    fs.writeFileSync('/tmp/tmp', string);

    console.log(tree(data));

    done();
  });
});
