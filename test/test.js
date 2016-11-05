var assert = require('assert');
var tree = require('../index');
var fs = require('fs');

describe('Tree test', function() {
  it('Basic', function(done) {
    var data = {
      name: 'Results',
      children: [{
        name: '宝马',
        children: [{
          name: '3系',
          children: [{
            name: '老款'
          }, {
            name: '新款'
          }]
        }, {
          name: '5系'
        }, {
          name: '7系'
        }]
      }, {
        name: '奔驰',
        children: [{
          name: 'SUV',
          children: [{
            name: 'GLA'
          }, {
            name: 'GLC'
          }]
        }, {
          name: '轿车',
          children: [{
            name: 'E级'
          }, {
            name: 'S级',
            children: [{
              name: '新款',
            }, {
              name: '老款'
            }]
          }]
        }]
      }]
    };

    var string = tree(data);

    fs.writeFileSync('/tmp/tmp', string);

    console.log(tree(data));

    done();
  });
});
