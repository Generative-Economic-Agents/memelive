System.register([], function (_export, _context) {
  "use strict";

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", countHolders);
    }
  };
});
//# sourceMappingURL=87fc9a98e0b932a903f6f3327f2e32916056d79d.js.map