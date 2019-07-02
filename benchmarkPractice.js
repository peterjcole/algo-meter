var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

suite.add('Array#sort', function() {
  [1,2,3].sort();
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'))
})
.run({ 'async': true} )

