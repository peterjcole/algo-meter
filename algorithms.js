module.exports = {
  assignStudents: function(students, numGroups) {
    let groups = []
    for(let i = 0; i < numGroups; i++) {
      groups.push([])
    }
    let currentGroup = 0
    // console.log(groups)
    // console.log(groups[currentGroup])
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
  }



  // make an array of positions

}
