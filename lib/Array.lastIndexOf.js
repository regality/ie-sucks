Array.prototype.lastIndexOf = function(searchElement, fromIndex) {
  if (!fromIndex || !isFinite(fromIndex)) {
    fromIndex = this.length - 1;
  }

  for (var i = fromIndex; i >= 0; --i) {
    if (this.hasOwnProperty(i) && this[i] === searchElement) {
      return i;
    }
  }
  return -1;
}
