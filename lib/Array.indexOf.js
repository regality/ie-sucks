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
