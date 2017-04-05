// Tally the results of a small football competition.

// Tally the results of a small football competition. Based on an input file containing which team played against which and what the outcome was create a file with a table like this:

// Team                           | MP |  W |  D |  L |  P
// Devastating Donkeys            |  3 |  2 |  1 |  0 |  7
// Allegoric Alaskans             |  3 |  2 |  0 |  1 |  6
// Blithering Badgers             |  3 |  1 |  0 |  2 |  3
// Courageous Californians        |  3 |  0 |  1 |  2 |  1
// What do those abbreviations mean?

// MP: Matches Played
// W: Matches Won
// D: Matches Drawn (Tied)
// L: Matches Lost
// P: Points
// A win earns a team 3 points. A draw earns 1. A loss earns 0.

// The outcome should be ordered by points, descending. In case of a tie, teams are ordered alphabetically.

// Input

// Your tallying program will receive input that looks like:

// Allegoric Alaskans;Blithering Badgers;win
// Devastating Donkeys;Courageous Californians;draw
// Devastating Donkeys;Allegoric Alaskans;win
// Courageous Californians;Blithering Badgers;loss
// Blithering Badgers;Devastating Donkeys;loss
// Allegoric Alaskans;Courageous Californians;win
// The result of the match refers to the first team listed. So this line

// Allegoric Alaskans;Blithering Badgers;win
// Means that the Allegoric Alaskans beat the Blithering Badgers.

// This line:

// Courageous Californians;Blithering Badgers;loss
// Means that the Blithering Badgers beat the Courageous Californians.

// And this line:

// Devastating Donkeys;Courageous Californians;draw
// Means that the Devastating Donkeys and Courageous Californians tied.

// Your program should only process input lines that follow this format. All other lines should be ignored: If an input contains both valid and invalid input lines, output a table that contains just the results from the valid lines.


function



// 根据输入的数组中每项的 before/after/first/last 规则，输出一个新排好序的数组或者链表。要求，多解的情况可以只求一解，如果无解要求程序能检测出来。

// Input:

// [
//     {id: 1},
//     {id: 2, before: 1},
//     {id: 3, after: 1},
//     {id: 5, first: true},
//     {id: 6, last: true},
//     {id: 7, after: 8},
//     {id: 8},
//     {id: 9},
// ]
// 5 2 1 3 8 7 9 6

var arr = [
  {id: 1},
  {id: 2, before: 1},
  {id: 3, after: 1},
  {id: 5, first: true},
  {id: 6, last: true},
  {id: 7, after: 8},
  {id: 11, after: 10},
  {id: 8},
  {id: 9},
]
function convertToArray (arr) {
  var link = new LinkedList()
  var firstObj, lastObj, indexBefore, indexAfter, index = 0, lastLength = 0
  arr.push('sign')
  while (arr.length) {
    firstObj = arr.shift()
    if (firstObj === 'sign') {
      debugger
      if (lastLength === index) {
        console.warn('can not insert:' + JSON.stringify(arr))
        break
      }
      lastLength = index
      index = 0
      arr.push('sign')
      continue
    }
    index++
    indexBefore = link.indexOf(firstObj.before)
    indexAfter = link.indexOf(firstObj.after)
    if (firstObj.before !== undefined) {
      if (indexBefore > -1) {
        link.insertByIndex(firstObj.id, indexBefore === 0 ? 0 : indexBefore - 1)
      } else {
        arr.push(firstObj)
      }
      continue
    }
    if (firstObj.after !== undefined) {
      if (indexAfter > -1) {
        link.insertByIndex(firstObj.id, indexAfter + 1)
      } else {
        arr.push(firstObj)
      }
      continue
    }
    if (firstObj.first !== undefined) {
      link.insertByIndex(firstObj.id, 0)
      continue
    }
    if (firstObj.last !== undefined) {
      lastObj = firstObj.id
      continue
    }
    link.insert(firstObj.id)
  }
  link.insert(lastObj)
  return link.findAll()
}

// 将输入的数组组装成一颗树状的数据结构，时间复杂度越小越好。要求程序具有侦测错误输入的能力。

// Input:

// [
//     {id:1, name: 'i1'},
//     {id:2, name:'i2', parentId: 1},
//     {id:4, name:'i4', parentId: 3},
//     {id:3, name:'i3', parentId: 2},
//     {id:8, name:'i8', parentId: 7}
// ]


var arr = [
  {id:1, name: 'i1'},
  {id:2, name:'i2', parentId: 1},
  {id:4, name:'i4', parentId: 3},
  {id:3, name:'i3', parentId: 2},
  {id:8, name:'i8', parentId: 7}
]
function Tree (arr) {
  this.hash = {}
  for (var i = 0; i < arr.length; i++) {
    if (this.hash[arr[i].parentId]) {
      this.hash[arr[i].parentId || 'base'].push(arr[i])
    } else {
      this.hash[arr[i].parentId || 'base'] = []
      this.hash[arr[i].parentId || 'base'].push(arr[i])
    }
  }
  
}
convertToTree.prototype.convert = function () {
  this.group(this.hash['base'])
  var result = [].concat(this.hash['base'])
  delete this.hash['base']
  var notGroup = []
  for (var key in this.hash) {
    notGroup = this.hash[key] && [].concat(this.hash[key])
  }
  notGroup = JSON.stringify(notGroup)
  if (notGroup !== '{}') {
    console.warn('can not insert:' + notGroup)
  }
  return result
}
convertToTree.prototype.group = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (this.hash[arr[i].id]) {
      arr[i].child = [].concat(this.hash[arr[i].id])
      delete this.hash[arr[i].id]
      return this.group(arr[i].child)
    }
  }
}

// Make a chain of dominoes.

// Compute a way to order a given set of dominoes in such a way that they form a correct domino chain (the dots on one half of a stone match the dots on the neighbouring half of an adjacent stone) and that dots on the halfs of the stones which don't have a neighbour (the first and last stone) match each other.

// For example given the stones 21, 23 and 13 you should compute something like 12 23 31 or 32 21 13 or 13 32 21 etc, where the first and last numbers are the same.

// For stones 12, 41 and 23 the resulting chain is not valid: 41 12 23's first and last numbers are not the same. 4 != 3

// Some test cases may use duplicate stones in a chain solution, assume that multiple Domino sets are being used.

// Input example: (1, 2), (5, 3), (3, 1), (1, 2), (2, 4), (1, 6), (2, 3), (3, 4), (5, 6)


function




