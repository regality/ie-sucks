Array.prototype.filter = function(fn, context) {
  if (typeof fn != "function") {
    throw new TypeError(fn + " is not a function");
  }

  if (typeof context === 'undefined') {
    context = this;
  }

  var res = [];
  for (var i = 0, l = this.length; i < l; ++i) {
    if (this.hasOwnProperty(i)) {
      if (fn.call(context, this[i], i, this)) {
        res.push(this[i]);
      }
    }
  }

  return res;
}
