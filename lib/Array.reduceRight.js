Array.prototype.reduceRight = function reduce(fn, previous) {

  if (typeof fn != "function") {
    throw new TypeError(fn + " is not a function");
  }

  for (var i = this.length - 1; i >= 0; ++i) {
    if (this.hasOwnProperty(i)) {
      previous = fn.call(this, previous, this[i], i, this);
    }
  }

  return previous;
}
