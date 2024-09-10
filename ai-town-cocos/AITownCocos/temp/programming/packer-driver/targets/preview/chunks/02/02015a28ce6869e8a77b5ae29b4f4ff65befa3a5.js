System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isIndex;

  /**
   * The base implementation of `_.nth` which doesn't coerce arguments.
   *
   * @private
   * @param {Array} array The array to query.
   * @param {number} n The index of the element to return.
   * @returns {*} Returns the nth element of `array`.
   */
  function baseNth(array, n) {
    var length = array.length;

    if (!length) {
      return;
    }

    n += n < 0 ? length : 0;
    return isIndex(n, length) ? array[n] : undefined;
  }

  return {
    setters: [function (_unresolved_) {
      isIndex = _unresolved_.default;
    }],
    execute: function () {
      _export("default", baseNth);
    }
  };
});
//# sourceMappingURL=02015a28ce6869e8a77b5ae29b4f4ff65befa3a5.js.map