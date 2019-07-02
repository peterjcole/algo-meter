const algorithms = require('../algorithms.js')

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
    console.log(algorithms.assignStudents(sampleOddArray, 4))
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

