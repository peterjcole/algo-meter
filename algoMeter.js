const { performance } = require('perf_hooks')

function runAlgoMeter(fn) {
//   const arrs = createArrs(generateSizesArr(5000, 210000, 5000));  
  const arrs = createArrs(generateSizesArr(100000, 1000000, 100000));  

  const results = executeTests(arrs, fn);
  return results.slice(0, (results.length - 2))

}

function generateSizesArr(start, end, step) {
  let generatedSizesArr = []
  for(let i = start; i <= end; i += step) {
    generatedSizesArr.push(i)
  }
  return generatedSizesArr
}

function createArrs(sizesArr) {
  let createdArr = []
  sizesArr.forEach(function(num) {
    createdArr.push(generateRandomArr(num))
  })
  return createdArr
}

function generateRandomArr(length) {
  let randomArr = []
  for(let i = 0; i < length; i++) {
    randomArr.push(generateRandomString())
  }
  return randomArr
}

function generateRandomString() {
  var length = 10
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function executionTime(fn, obj){
  let results = []
  for(let i = 0; i < 20; i++) {
    var t0 = performance.now();
    obj[fn]() 
    var t1 = performance.now();
    results.push(t1 - t0)
  }
  return arrMedian(results)
}

function arrMean(arr) {
  let sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  }, 0)
  return (sum / arr.length)
}

function arrMedian(arr) {
  var half = Math.floor(arr.length / 2);
  
  arr.sort(function(a, b) { return a - b;});
  
  if (arr.length % 2) {
    return arr[half];
  } else {
    return (arr[half-1] + arr[half]) / 2.0;
  }

}

function executeTests(arrs, fn) {
  let results = []
  arrs.forEach(function(arr){
    results.push({x: arr.length, y: executionTime(fn, arr)})
  })
  return results 
}

module.exports = { runAlgoMeter }