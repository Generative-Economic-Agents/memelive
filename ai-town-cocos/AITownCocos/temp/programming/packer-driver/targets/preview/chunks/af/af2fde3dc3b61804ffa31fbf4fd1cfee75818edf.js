System.register([], function (_export, _context) {
  "use strict";

  var PLACEHOLDER;

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      /** Used as the internal argument placeholder. */
      PLACEHOLDER = '__lodash_placeholder__';

      _export("default", replaceHolders);
    }
  };
});
//# sourceMappingURL=af2fde3dc3b61804ffa31fbf4fd1cfee75818edf.js.map