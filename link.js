function Node (element) {
  this.element = element
  this.next = null
}

function LinkedList () {
  this.length = 0
  this.headNode = null
}
LinkedList.prototype.insert = function (newEle) {
  var newNode = new Node(newEle)
  // 列表为空
  if (!this.headNode) {
    this.headNode = newNode
  } else {
    var lastNode = this.findByIndex(this.length - 1)
    newNode.next = lastNode.next
    lastNode.next = newNode
  }
  this.length++
  return true
}
LinkedList.prototype.insertByElement = function (newEle, ele) {
  var newNode = new Node(newEle)
  if (!this.headNode) {
    this.headNode = newNode
    this.length++
    return true
  }
  var prevNode = this.findPrevByElement(ele)
  if (!prevNode) return false
  if (prevNode === -1) {
    newNode.next = this.headNode
    this.headNode = newNode
    this.length++
    return true
  }
  newNode.next = prevNode.next
  prevNode.next = newNode
  this.length++
  return true
}
LinkedList.prototype.insertByIndex = function (newEle, index) {
  var newNode = new Node(newEle)
  if (!this.headNode) {
    this.headNode = newNode
    this.length++
    return true
  }
  if (typeof index !== 'number') return false
  if (index === 0) {
    newNode.next = this.headNode
    this.headNode = newNode
    this.length++
    return true
  }
  var prevNode = this.findByIndex(index - 1)
  if (!prevNode) return false
  newNode.next = prevNode.next
  prevNode.next = newNode
  this.length++
  return true
}
LinkedList.prototype.remove = function () {
  if (this.length <= 1) {
    this.headNode = null
    this.length = 0
    this.length--
    return true
  } else {
    var lastPrevNode = this.findByIndex(this.length - 2)
    lastPrevNode.next = null
    this.length--
    return true
  }
}
LinkedList.prototype.removeByElement = function (ele) {
  return this.removeByIndex(this.indexOf(ele))
}
LinkedList.prototype.removeByIndex = function (index) {
  if (this.length === 0 || typeof index !== 'number') return false
  var currentNode = this.headNode
  if (index === 0) {
    this.headNode = currentNode.next
    this.length--
    return true
  }
  if (index > 0 && index < this.length) {
    var prevNode = this.findByIndex(index - 1)
    if (!prevNode) return false
    prevNode.next = prevNode.next.next
    this.length--
    return true
  }
  return false
}
LinkedList.prototype.findAll = function () {
  var results = []
  var currentNode = this.headNode
  if (currentNode) {
    results.push(currentNode.element)
    while (currentNode.next !== null) {
      results.push(currentNode.next.element)
      currentNode = currentNode.next
    }
  }
  return results
}
LinkedList.prototype.findByElement = function (ele) {
  var currentNode = this.headNode
  if (currentNode) {
    if (currentNode.element === ele) return currentNode
    while (currentNode.next !== null) {
      if (currentNode.next.element === ele) return currentNode.next
      currentNode = currentNode.next
    }
  }
  return false
}
LinkedList.prototype.findPrevByElement = function (ele) {
  var currentNode = this.headNode
  if (currentNode) {
    if (currentNode.element === ele) return -1
    while (currentNode.next !== null) {
      if (currentNode.next.element === ele) return currentNode
      currentNode = currentNode.next
    }
  }
  return false
}
LinkedList.prototype.findByIndex = function (index) {
  if (this.length === 0 || typeof index !== 'number') return false
  var idx = 0
  var currentNode = this.headNode
  if (index >= 0 && index < this.length) {
    while (idx <= index) {
      if (idx === index) return currentNode
      currentNode = currentNode.next
      idx++
    }
  }
  return false
}
LinkedList.prototype.indexOf = function (ele) {
  var currentNode = this.headNode
  var index = 0
  if (currentNode) {
    if (currentNode.element === ele) return index
    index++
    while (currentNode.next !== null) {
      if (currentNode.next.element === ele) return index
      index++
      currentNode = currentNode.next
    }
  }
  return -1
}
