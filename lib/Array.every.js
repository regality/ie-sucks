Array.prototype.every = function(fn, context) {
  if (typeof fn != "function") {
    throw new TypeError(fn + " is not a function");
  }

  if (typeof context === 'undefined') {
    context = this;
  }

  for (var i = 0, l = this.length; i < l; i++) {
    if (i in t && !fn.call(context, this[i], i, this)) {
      return false;
    }
  }

  return true;
}
