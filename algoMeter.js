const { performance } = require('perf_hooks')

function runAlgoMeter(fn) {
  const arrs = createArrs(generateSizesArr());  
  const results = executeTests(arrs, fn);
  // const results = executeTestsForSizes(generateSizesArr(), fn)
  return results
}

function generateSizesArr() {
  let generatedSizesArr = []
  for(let i = 5000; i <= 100000; i += 5000) {
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
  var length = Math.floor(Math.random() * 10);
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
  for(let i = 0; i < 10; i++) {
    var t0 = performance.now();
    obj[fn]() 
    var t1 = performance.now();
    if (obj.length == 95000) {
      console.log("95000 Call took " + (t1 - t0) + " milliseconds.")
    }
    if (obj.length == 100000) {
      console.log("100000 Call took " + (t1 - t0) + " milliseconds.")
    }
    results.push(t1 - t0)
  }
  return arrMean(results)
}

function arrMean(arr) {
  let sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  }, 0)
  return (sum / arr.length)
}

function executeTests(arrs, fn) {
  let results = []
  arrs.forEach(function(arr){
    results.push({x: arr.length, y: executionTime(fn, arr)})
  })
  return results
}

// function executeTestsForSizes(sizeArr, fn) {
//   let finalResult = []
//   sizeArr.forEach(function(size){
//     let results = []
//     for(let i = 0; i < 10; i++) {
//       results.push(executionTime(fn, generateRandomArr(size)))
//     }
//     finalResult.push({x: size, y: arrMean(results)})
//   })
//   return finalResult
// }

module.exports = { runAlgoMeter }