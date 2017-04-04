// NaN只能添加一次
// -0 0 +0 可以同时存在
// 不能用indexOf，因为indexOf用的是严格相等，而NaN===NaN是false，-0===0===+0是true
function Set () {
  this.dataSource = []
  this.size = this.dataSource.length
}
Set.prototype.add = function (item) {
  return this.has(item) ? false : !!(this.dataSource.push(item))
}
Set.prototype.delete = function (item) {
  var index = this.has(item, true)
  if (index < 0) return true
  return !!(this.dataSource.splice(index, 1).join(''))
}
Set.prototype.has = function (item) {

}
Set.prototype.clear = function () {
  this.dataSource = []
}
// 并集
Set.prototype.union = function () {}
// 子集
Set.prototype.subset = function () {}
// 补集
Set.prototype.difference = function () {}
// 交集
Set.prototype.intersect = function () {}

export default {
  Set
}

