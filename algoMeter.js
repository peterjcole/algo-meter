const { performance } = require('perf_hooks')
const algorithms = require('./algorithms')

function runAlgoMeter(type, fn, secondArgument) {
  // const arrs = createArrs(generateSizesArr(100000, 1000000, 100000));  
  const arrs = createArrs(generateSizesArr(1000, 10000, 100));  

  const results = executeTests(type, arrs, fn, secondArgument);
  return results.slice(0, (results.length - 2))
//   const arrs = createArrs(generateSizesArr(5000, 210000, 5000));  
}

// function runArray(fn, secondArgument) {
//   console.log(`running array: ${fn}, ${secondArgument}`)

// }

// function runStandard(fn, secondArgument) {
//   // const arrs = createArrs(generateSizesArr(100000, 1000000, 100000));  
//   console.log(`running standard: ${fn}, ${secondArgument}`)

//   const results = executeTestsForStandardFunction(arrs, fn, secondArgument);
//   return results.slice(0, (results.length - 2))
// }

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

function executionTime(type, fn, obj, secondArgument){
  let results = []
  evalArgument = eval(secondArgument)
  for(let i = 0; i < 20; i++) {
    if(type === 'array') {
      // console.log(`running ${fn} with argument of ${(evalArgument)}, of type ${typeof(evalArgument)}`)
      var t0 = performance.now();
      obj[fn](evalArgument)
      var t1 = performance.now();
    } else if (type === 'global') {
      var t0 = performance.now();
      global[fn](obj, evalArgument)
    } else if (type === 'algorithm') {
      // console.log(`running ${fn} with argument of ${(evalArgument)}, of type ${typeof(evalArgument)}`)
      var t0 = performance.now();
      algorithms[fn](obj, evalArgument)
      var t1 = performance.now();
    }
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

function executeTests(type, arrs, fn, secondArgument) {
  let results = []
  arrs.forEach(function(arr){
    results.push({x: arr.length, y: executionTime(type, fn, arr, secondArgument)})
  })
  return results 
}

module.exports = { runAlgoMeter }