module.exports = {
  assignStudents: function(students, numGroups) {
    let groups = []
    for(let i = 0; i < numGroups; i++) {
      groups.push([])
    }
    let currentGroup = 0
    students.forEach(function(student, index) {
      groups[currentGroup].push(student)
      currentGroup >= numGroups - 1 ? currentGroup = 0 : currentGroup++
    })
    return groups
  },

  shuffle: function(array) {
    let shuffled = []
    let sourceArray = [...array]
    while(sourceArray.length > 0) {
      min = 0;
      max = sourceArray.length - 1;
      pos = Math.floor(Math.random() * (max - min + 1)) + min
      shuffled.push(sourceArray.splice(pos, 1)[0])
    }
    return shuffled
  },

  newShuffle: function(array) {
    let output = [...array]
    let last = array.length - 1
    for(let i = 0; i < array.length; i++) {
      let min = 0
      let pos = Math.floor(Math.random() * (last - min + 1)) + min
      let old = output[i]
      output[i] = output[pos]
      output[pos] = old
    }
    return output
  },

  antoShuffle: function(array) {
    let output = [...array]
    let last = array.length - 1
    for(let i = 0; i < array.length; i++) {
      let min = 0
      let pos = Math.floor(Math.random() * (last - min + 1)) + min
      let old = output[pos]
      let previousLast = output[last]
      output[pos] = previousLast
      output[last] = old
    }
    return output
  },

  reverse: function(array) {
    output = []
    array.forEach(function(item, index) {
      output[array.length - 1 - index] = item
    })
    return output
  },

  // mechaCoach: function(array) {
  //   let output = []
  //   let doneGroups = {}

  //   let possiblePairs = []
  //   let usedPairs = {}
  //   //make all possible pairs
  //   for(let i = 0; i < array.length - 1; i++) {
  //     for(let j = i + 1; j < array.length; j++) {
  //       pair = [array[i], array[j]]
  //       possiblePairs.push(pair)
  //       usedPairs[pair] = false
  //     }
  //   }

  //   console.log(possiblePairs)
  //   let first = 0
  //   let second = possiblePairs.length - 1

  //   for (let i = 0; i < (possiblePairs.length / 2); i++) {
  //     output.push([possiblePairs[first], possiblePairs[second]])
  //     first += 1
  //     second -= 1
  //   }

  //   console.log(output)
  //   return output

    
  
}