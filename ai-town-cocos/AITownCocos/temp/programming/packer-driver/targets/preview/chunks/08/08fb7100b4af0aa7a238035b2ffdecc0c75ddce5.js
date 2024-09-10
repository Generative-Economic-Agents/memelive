System.register([], function (_export, _context) {
  "use strict";

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];

        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }

      return object;
    };
  }

  return {
    setters: [],
    execute: function () {
      _export("default", createBaseFor);
    }
  };
});
//# sourceMappingURL=08fb7100b4af0aa7a238035b2ffdecc0c75ddce5.js.map