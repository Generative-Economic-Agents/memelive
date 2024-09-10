System.register([], function (_export, _context) {
  "use strict";

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }

    return array;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", arrayEachRight);
    }
  };
});
//# sourceMappingURL=6d5709f83a8e947914e59c97a09797fdf2dde978.js.map