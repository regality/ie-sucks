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
