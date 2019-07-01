var Benchmark = require('benchmark');

var suite = new Benchmark.suite;

suite.add('Array#sort', function() {
  [1,2,3].sort();
})
.run();