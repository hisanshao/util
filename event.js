var Event = (function () {
  var _events = {}
  var trigger = function (tag) {
    if (!tag) {
      throw new TypeError('trigger the corresponding event you need to fill out a tag ')
    }
    var listeners = _events[tag]
    if (!listeners || (listeners && !listeners.length)) {
      return false
    } else {
      var args = Array.prototype.slice.apply(arguments)
      for (var i = 0; i < listeners.length; i++) {
        listeners[i].apply(null, args)
      }
    }
  }
  var on = function (tag, listener) {
    if (!tag) {
      throw new TypeError('trigger the corresponding event you need to fill out a tag ')
    }
    if (typeof listener !== 'function') {
      throw new TypeError('trigger argument error:' + listener.toString())
    }
    if (!_events[tag]) {
      this._events[tag] = [listener]
    } else {
      this._events[tag].push(listener)
    }
  }
  return {
    on,
    trigger
  }
})()
