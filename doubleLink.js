function Node (element) {
  this.element = element
  this.next = null
  this.prev = null
}

function DoubleLinkedList () {
  this.length = 0
  this.headNode = null
}
DoubleLinkedList.prototype.insert = function (newEle) {
  var newNode = new Node(newEle)
  // 列表为空
  if (!this.headNode) {
    this.headNode = newNode
  } else {
    var lastNode = this.findByIndex(this.length - 1)
    newNode.next = lastNode.next
    lastNode.next = newNode
    newNode.prev = lastNode
  }
  this.length++
  return true
}
DoubleLinkedList.prototype.insertByElement = function (newEle, ele) {
  var newNode = new Node(newEle)
  if (!this.headNode) {
    this.headNode = newNode
    this.length++
    return true
  }
  var currentNode = this.findByElement(ele)
  if (!currentNode) return false
  currentNode.prev.next = newNode
  newNode.prev = currentNode.prev
  newNode.next = currentNode
  currentNode.prev = newNode
  this.length++
  return true
}
DoubleLinkedList.prototype.insertByIndex = function (newEle, index) {
  var newNode = new Node(newEle)
  if (!this.headNode) {
    this.headNode = newNode
    this.length++
    return true
  }
  if (typeof index !== 'number') return false
  if (index === 0) {
    newNode.next = this.headNode
    this.headNode.prev = newNode
    this.headNode = newNode
    this.length++
    return true
  }
  var currentNode = this.findByIndex(index)
  if (!currentNode) return false
  currentNode.prev.next = newNode
  newNode.prev = currentNode.prev
  newNode.next = currentNode
  currentNode.prev = newNode
  this.length++
  return true
}
DoubleLinkedList.prototype.remove = function () {
  if (this.length <= 1) {
    this.headNode = null
    this.length = 0
    this.length--
    return true
  } else {
    var currentNode = this.findByIndex(this.length - 1)
    currentNode.prev.next = null
    this.length--
    return true
  }
}
DoubleLinkedList.prototype.removeByElement = function (ele) {
  return this.removeByIndex(this.indexOf(ele))
}
DoubleLinkedList.prototype.removeByIndex = function (index) {
  if (this.length === 0 || typeof index !== 'number') return false
  var currentNode
  currentNode = this.headNode
  if (index === 0) {
    this.headNode = currentNode.next
    this.headNode.prev = null
    this.length--
    return true
  }
  if (index > 0 && index < this.length) {
    currentNode = this.findByIndex(index)
    if (!currentNode) return false
    currentNode.prev.next = currentNode.next
    currentNode.next.prev = currentNode.prev
    this.length--
    return true
  }
  return false
}
DoubleLinkedList.prototype.findAll = function () {
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
DoubleLinkedList.prototype.findByElement = function (ele) {
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
DoubleLinkedList.prototype.findByIndex = function (index) {
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
DoubleLinkedList.prototype.indexOf = function (ele) {
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
