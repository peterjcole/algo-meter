const { performance } = require('perf_hooks')

runAlgoMeter() 


function runAlgoMeter() {
  arrs = createArrs(generateSizesArr());  
  results = executeArrs(arrs);
}

function generateSizesArr() {
  generatedSizesArr = []
  for(let i = 5000; i <= 100000; i += 5000) {
    generatedSizesArr.push(i)
  }
  return generatedSizesArr
}

function createArrs(sizesArr) {
  createdArr = []
  sizesArr.forEach(function(num) {
    createdArr.push(generateRandomArr(num))
  })
  return createdArr
}

function generateRandomArr(length) {
  randomArr = []
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
  results = []
  for(let i = 0; i < 10; i++) {
    var t0 = performance.now();
    obj[fn]() 
    var t1 = performance.now();
    console.log("Call took " + (t1 - t0) + " milliseconds.")
    results.push(t1 - t0)
  }
  return arrMean(results)
}

function arrMean(arr) {
  sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  }, 0)
  return (sum / arr.length)
}

module.exports = { runAlgoMeter }