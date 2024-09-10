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
//# sourceMappingURL=e753941695ac5e5a2a67269809731ed74a157443.js.map