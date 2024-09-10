System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseRandom;

  /**
   * A specialized version of `_.sample` for arrays.
   *
   * @private
   * @param {Array} array The array to sample.
   * @returns {*} Returns the random element.
   */
  function arraySample(array) {
    var length = array.length;
    return length ? array[baseRandom(0, length - 1)] : undefined;
  }

  return {
    setters: [function (_unresolved_) {
      baseRandom = _unresolved_.default;
    }],
    execute: function () {
      _export("default", arraySample);
    }
  };
});
//# sourceMappingURL=6d4ef0163f1c2ba1a17490989908fa458526451b.js.map