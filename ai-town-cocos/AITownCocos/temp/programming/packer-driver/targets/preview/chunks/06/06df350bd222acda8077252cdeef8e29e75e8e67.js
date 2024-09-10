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
//# sourceMappingURL=06df350bd222acda8077252cdeef8e29e75e8e67.js.map