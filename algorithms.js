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
  }
}
