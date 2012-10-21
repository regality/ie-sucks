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
