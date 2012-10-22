if (!Array.prototype.forEach) {
Array.prototype.forEach = function(fn, context) {
  if (typeof fn != "function") {
    throw new TypeError(fn + " is not a function");
  }

  if (typeof context === 'undefined') {
    context = this;
  }

  for (var i = 0, l = this.length; i < l; ++i) {
    fn.call(context, this[i], i, this);
  }
}
}

if (!Array.prototype.indexOf) {
Array.prototype.indexOf = function(searchElement, fromIndex) {
  if (!fromIndex || !isFinite(fromIndex)) {
    fromIndex = 0;
  }

  for (var i = fromIndex, l = this.length; i < l; ++i) {
    if (this.hasOwnProperty(i) && this[i] === searchElement) {
      return i;
    }
  }
  return -1;
}
}

if (!Array.prototype.map) {
Array.prototype.map = function(fn, context) {
  if (typeof fn != "function") {
    throw new TypeError(fn + " is not a function");
  }

  if (typeof context === 'undefined') {
    context = this;
  }

  var result = new Array(this.length);
  for (var i = 0, l = this.length; i < l; ++i) {
    result[i] = fn.call(context, this[i], i, this);
  }

  return result;
}
}

if (!Function.prototype.bind) {
Function.prototype.bind = function () {
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;
  var args = arguments.length === 1
           ? [arguments[0]]
           : Array.apply(null, arguments);
  var context = args.shift();

  if (args.length) {
    var bound = function() {
      return self.apply(context, args);
    }
  } else {
    var bound = function() {
      return self.apply(context, arguments);
    }
  }

  bound.prototype = this.prototype;

  return bound;
}
}

if (!Object.create) {
Object.create = function (o) {
  if (arguments.length > 1) {
    throw new Error('Object.create implementation only accepts the first parameter.');
  }
  function F() {}
  F.prototype = o;
  return new F();
}
}

if (!Object.keys) {
Object.keys = function (obj) {
  if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) {
    throw new TypeError('Object.keys called on non-object');
  }

  var result = []

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result.push(prop);
    }
  }

  return result
}
}

