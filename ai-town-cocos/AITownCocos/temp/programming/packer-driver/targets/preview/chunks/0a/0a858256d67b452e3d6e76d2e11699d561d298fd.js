System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createWrap, WRAP_FLIP_FLAG;

  /**
   * Creates a function that invokes `func` with arguments reversed.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Function
   * @param {Function} func The function to flip arguments for.
   * @returns {Function} Returns the new flipped function.
   * @example
   *
   * var flipped = _.flip(function() {
   *   return _.toArray(arguments);
   * });
   *
   * flipped('a', 'b', 'c', 'd');
   * // => ['d', 'c', 'b', 'a']
   */
  function flip(func) {
    return createWrap(func, WRAP_FLIP_FLAG);
  }

  return {
    setters: [function (_unresolved_) {
      createWrap = _unresolved_.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for function metadata. */
      WRAP_FLIP_FLAG = 512;

      _export("default", flip);
    }
  };
});
//# sourceMappingURL=0a858256d67b452e3d6e76d2e11699d561d298fd.js.map