const algorithms = require('../algorithms.js')

const mockMath = Object.create(global.Math);
global.Math = mockMath;


describe('#assignStudents', function() {

  const sampleArray = ['Peter', 'Anthony', 'Egle', 'Tan', 'Piers', 'Adrian', 'Anna', 'Geoff']
  const sampleOddArray = ['Peter', 'Anthony', 'Egle', 'Tan', 'Piers', 'Adrian', 'Anna', 'Geoff', 'Taj']

  it('assigns students into the correct number of groups for even array, even groups', function() {
    expect(algorithms.assignStudents(sampleArray, 2).length).toEqual(2)
  })
  it('assigns students into equal sized groups for even array, even groups', function() {
    const result = algorithms.assignStudents(sampleArray, 2)
    result.forEach(function(group) {
      expect(group.length).toEqual(4)
    })
  })
  it('assigns students into the correct number of groups for even array, odd groups', function() {
    expect(algorithms.assignStudents(sampleArray, 3).length).toEqual(3)
  })
  it('assigns students into equal sized groups for even array, odd groups', function() {
    const result = algorithms.assignStudents(sampleArray, 3)
    result.forEach(function(group) {
      expect(group.length >= 2 && group.length <= 3).toBe(true)
    })
  })

  it('assigns students into the correct number of groups for odd array, even groups', function() {
    expect(algorithms.assignStudents(sampleOddArray, 4).length).toEqual(4)
  })
  it('assigns students into equal sized groups for odd array, even groups', function() {
    const result = algorithms.assignStudents(sampleOddArray, 4)
    result.forEach(function(group) {
      expect(group.length >= 2 && group.length <= 3).toBe(true)
    })
  })
  it('assigns students into the correct number of groups for odd array, odd groups, multiple', function() {
    expect(algorithms.assignStudents(sampleOddArray, 3).length).toEqual(3)
  })
  it('assigns students into equal sized groups for odd array, odd groups, multiple', function() {
    const result = algorithms.assignStudents(sampleOddArray, 3)
    result.forEach(function(group) {
      expect(group.length).toEqual(3)
    })
  })
  it('assigns students into the correct number of groups for odd array, odd groups, not multiple', function() {
    expect(algorithms.assignStudents(sampleOddArray, 5).length).toEqual(5)
  })
  it('assigns students into equal sized groups for odd array, odd groups, not multiple', function() {
    const result = algorithms.assignStudents(sampleOddArray, 5)
    result.forEach(function(group) {
      expect(group.length >= 1 && group.length <= 2).toBe(true)
    })
  })
})

describe('shuffle', function() {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  it ('returns an array', function() {
    expect(Array.isArray(algorithms.shuffle(testArray))).toBe(true)
  })

  it ('returns an array containing the same items as were passed in', function() {
    mockMath.random = Math.random;

    output = algorithms.shuffle(testArray)
    extraValues = output.filter((value) => testArray.indexOf(value) === -1)
    missingValues = testArray.filter((value) => output.indexOf(value) === -1)

    expect(extraValues.length).toEqual(0)
    expect(missingValues.length).toEqual(0)
  })
  it ('returns the same array each time (seed is fixed)' , function() {
    expected = [
      6,  5,  7,
      4,  8,  3,
      9,  2, 10,
      1
    ]
    mockMath.random = () => 0.5;
    expect(algorithms.shuffle(testArray)).toEqual(expected)
  })
})

describe('antoShuffle', function() {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  it ('returns an array', function() {
    expect(Array.isArray(algorithms.antoShuffle(testArray))).toBe(true)
  })

  it ('returns an array containing the same items as were passed in', function() {
    mockMath.random = Math.random;

    output = algorithms.antoShuffle(testArray)
    extraValues = output.filter((value) => testArray.indexOf(value) === -1)
    missingValues = testArray.filter((value) => output.indexOf(value) === -1)
    expect(extraValues.length).toEqual(0)
    expect(missingValues.length).toEqual(0)
  })
  it ('returns the same array each time (seed is fixed)' , function() {
    expected = [
      1,  2,  3,
      4,  5,  6,
      7,  8,  9,
     10
    ]
    mockMath.random = () => 0.5;
    expect(algorithms.antoShuffle(testArray)).toEqual(expected)
  })
})