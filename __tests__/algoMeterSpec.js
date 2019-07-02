const { runAlgoMeter }= require('../public/algoMeter.js')
const rewire = require('rewire')
const algoMeterRewire = rewire('../public/algoMeter.js')
const generateSizesArr = algoMeterRewire.__get__('generateSizesArr')
const createArrs = algoMeterRewire.__get__('createArrs')
const generateRandomArr = algoMeterRewire.__get__('generateRandomArr')
const generateRandomString = algoMeterRewire.__get__('generateRandomString')
const executionTime = algoMeterRewire.__get__('executionTime')
const arrMean = algoMeterRewire.__get__('arrMean')
const executeArrs = algoMeterRewire.__get__('executeArrs')




describe('algoMeter', function() {

    const expectedSizesArr = [
      5000,  10000,  15000,
     20000,  25000,  30000,
     35000,  40000,  45000,
     50000,  55000,  60000,
     65000,  70000,  75000,
     80000,  85000,  90000,
     95000, 100000
   ]


  describe('#generateSizesArr', function() {
    it('returns expected array', function() {
      expect(generateSizesArr()).toEqual(expectedSizesArr)
    })
  })

  describe('#createArrs', function() {
    it('creates an array containing only arrays', function() {
      createArrs(expectedSizesArr).forEach(function(arr) {
        expect(Array.isArray(arr)).toBe(true)
      })
    })
    it('creates arrays of the length of each array in the expected sizes arr',function() {
      createArrs(expectedSizesArr).forEach(function(arr, index){
        expect(arr.length).toEqual(expectedSizesArr[index])
      })
    })
  })

  describe('#generateRandomArr', function() {
    it ('creates an array of the specified size', function() {
      expect(generateRandomArr(1000).length).toEqual(1000);
      num = Math.floor(Math.random() * 100000) 
      expect(generateRandomArr(num).length).toEqual(num);
    })

    it ('creates an array', function() {
      expect(Array.isArray(generateRandomArr(100))).toBe(true);
    })

    it ('creates an array of strings', function() {
      generateRandomArr(100).forEach(function(value){
        expect(typeof(value)).toEqual('string')
      })
    })
  })

  describe ('#generateRandomString', function() {
    it ('creates a string', function() {
      expect(typeof(generateRandomString())).toEqual('string')
    })
  })

  describe ('#executionTime', function() {
    it ('returns a number', function() {
      const testArray = ["21213a", "eaewjkb32kj", "fajklbw", "jglewj3198"]
      result = executionTime('sort', testArray)
      console.log(result)
      expect(typeof(result)).toEqual("number")
    })
  })

  describe ('#arrMean', function() {
    const meanTestArray = [1.2, 2.6, 2.1, 3.9]

    it ('returns a number', function() {
      result = arrMean(meanTestArray)
      expect(typeof(result)).toEqual("number")
    })

    it ('returns the correct mean', function() {
      result = arrMean(meanTestArray)
      expect(result).toEqual(2.45)
    })
  })

  describe ('#executeArrs', function() {})
})