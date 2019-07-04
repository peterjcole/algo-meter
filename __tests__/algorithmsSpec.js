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

describe('#shuffle', function() {
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

describe('#antoShuffle', function() {
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

describe('#newShuffle', function() {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  it ('returns an array', function() {
    expect(Array.isArray(algorithms.newShuffle(testArray))).toBe(true)
  })

  it ('returns an array containing the same items as were passed in', function() {
    mockMath.random = Math.random;

    output = algorithms.newShuffle(testArray)
    extraValues = output.filter((value) => testArray.indexOf(value) === -1)
    missingValues = testArray.filter((value) => output.indexOf(value) === -1)
    expect(extraValues.length).toEqual(0)
    expect(missingValues.length).toEqual(0)
  })
  it ('returns the same array each time (seed is fixed)' , function() {
    expected = [
      6,  1,  2,
      3,  4, 10,
      5,  7,  8,
      9
    ]
    mockMath.random = () => 0.5;
    expect(algorithms.newShuffle(testArray)).toEqual(expected)
  })
})

describe ('#reverse', function() {

  const testStringArray = [
    'eoNeyzbzBy',
    'rxFSEY7P7d',
    'UXXP7bj7U5',
    'xmUJkNoQT9',
    'xxlUb1RZEj',
    'vDOphiqiSv',
    'BRARyAFLcY',
    'Ni0BpKCMY9',
    'yGRniz9YOv',
    '4exFeFUber'
  ]

  const reverseStringArray = [
    '4exFeFUber',
    'yGRniz9YOv',
    'Ni0BpKCMY9',
    'BRARyAFLcY',
    'vDOphiqiSv',
    'xxlUb1RZEj',
    'xmUJkNoQT9',
    'UXXP7bj7U5',
    'rxFSEY7P7d',
    'eoNeyzbzBy'
  ]

  const testObjArray = [
    [1, 2],
    {
      a: [4, 6],
      b: "hello"
    },
    3,
    {
      x: 1.222,
      y: { 
        a: 7.89
      }
    }
  ]

  const reverseObjArray = [
    {
      x: 1.222,
      y: { 
        a: 7.89
      }
    },
    3,
    {
      a: [4, 6],
      b: "hello"
    },
    [1, 2]
  ]

  it('returns an array', function() {
    expect(Array.isArray(algorithms.reverse(testStringArray))).toBe(true)
  })

  it('returns the expected shuffled array of strings', function() {
    expect(algorithms.reverse(testStringArray)).toEqual(reverseStringArray)
  })

  it('returns the expected shuffled array of objects', function() {
    expect(algorithms.reverse(testObjArray)).toEqual(reverseObjArray)
  })
})

// describe('#mechaCoach', function() {

//   const testArray = ["Alice", "Bob", "Charly", "Dan"]

//   const expected = [
//     [["Alice", "Bob"], ["Charly", "Dan"]], 
//     [["Alice", "Charly"], ["Bob" , "Dan"]], 
//     [["Alice", "Dan"], ["Bob" , "Charly"]],   
//   ]

//   const eightTest = ["Alice", "Bob", "Charly", "Dan", "Peter", "Egle"]

//   const eightSpected = [
//     [[ 'Alice', 'Bob' ],  [ 'Charly', 'Dan' ], [ 'Peter', 'Egle' ]],
//     [[ 'Alice', 'Charly' ],  [ 'Bob', 'Dan' ], [ 'Peter', 'Egle' ]],
//     [[ 'Alice', 'Dan' ],  [ 'Bob', 'Peter' ], [ 'Charly', 'Egle' ]],
//     [[ 'Alice', 'Peter' ], [ 'Bob', 'Egle' ], [ 'Charly', 'Dan' ]],
//     [[ 'Alice', 'Egle' ], [ 'Bob', 'Charly' ], [ 'Dan', 'Peter' ]],
//   ]

  // [
  //   [ 'Alice', 'Bob' ], 1
  //   [ 'Alice', 'Charly' ], 2
  //   [ 'Alice', 'Dan' ], 3
  //   [ 'Alice', 'Peter' ], 4
  //   [ 'Alice', 'Egle' ], 
  //   [ 'Bob', 'Charly' ],  
  //   [ 'Bob', 'Dan' ], 2
  //   [ 'Bob', 'Peter' ], 3
  //   [ 'Bob', 'Egle' ], 4
  //   [ 'Charly', 'Dan' ], 1
  //   [ 'Charly', 'Peter' ],
  //   [ 'Charly', 'Egle' ], 3
  //   [ 'Dan', 'Peter' ], 
  //   [ 'Dan', 'Egle' ],
  //   [ 'Peter', 'Egle' ] 1, 2
  // ]

  // [
  //   [[ 'Alice', 'Bob' ],  [ 'Charly', 'Egle' ], [ 'Dan', 'Peter' ]],
  //   [[ 'Alice', 'Charly' ],  [ 'Bob', 'Dan' ], [ 'Dan', 'Peter' ]],
  //   [[ 'Alice', 'Dan' ],  [ 'Bob', 'Peter' ], [ 'Charly', 'Egle' ]],
  //   [[ 'Alice', 'Peter' ], [ 'Bob', 'Egle' ], [ 'Charly', 'Dan' ]],
  //   [[ 'Alice', 'Egle' ], [ 'Bob', 'Charly' ], [ 'Dan', 'Peter' ]],
  // ]


  // it('returns an array of arrays', function() {
  //   algorithms.mechaCoach(testArray).forEach(function(value){
  //     expect(Array.isArray(value)).toBe(true)
  //   })
  // })

  // it('returns an array of arrays of arrays', function() {
  //   algorithms.mechaCoach(testArray).forEach(function(value){
  //     value.forEach(function(valueValue) {
  //       expect(Array.isArray(valueValue)).toBe(true)
  //     })
  //   })
  // })

  // it('returns expected value', function() {
  //   expect(algorithms.mechaCoach(testArray)).toEqual(expected)
  // })

  // it('works for a group of 8', function() {
  //   console.log(algorithms.mechaCoach(eightTest))
  // })
// })