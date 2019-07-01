const { performance } = require('perf_hooks')

let arr5000 = []
let arr50000 = []
let arr500000 = []
let arr5000000 = []


for(let i = 0; i < 5000; i++) {
  arr5000.push(i)
}

for(let i = 0; i < 50000; i++) {
  arr50000.push(i)
}

for(let i = 0; i < 500000; i++) {
  arr500000.push(i)
}

for(let i = 0; i < 5000000; i++) {
  arr5000000.push(i)
}

var t0 = performance.now();

arr5000.sort();

var t1 = performance.now();

console.log("Call took " + (t1 - t0) + " milliseconds.")

var t0 = performance.now();

arr50000.sort();

var t1 = performance.now();

console.log("Call took " + (t1 - t0) + " milliseconds.")

var t0 = performance.now();

arr500000.sort();

var t1 = performance.now();

console.log("Call took " + (t1 - t0) + " milliseconds.")

var t0 = performance.now();

arr5000000.sort();

var t1 = performance.now();

console.log("Call took " + (t1 - t0) + " milliseconds.")