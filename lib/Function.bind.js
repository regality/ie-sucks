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
