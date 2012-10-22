Array.prototype.reduce = function reduce(fn, previous) {

  if (typeof fn != "function") {
    throw new TypeError(fn + " is not a function");
  }

  for (var i = 0, l = this.length; i < l; ++i) {
    if (this.hasOwnProperty(i)) {
      previous = fn.call(this, previous, this[i], i, this);
    }
  }

  return previous;
}
