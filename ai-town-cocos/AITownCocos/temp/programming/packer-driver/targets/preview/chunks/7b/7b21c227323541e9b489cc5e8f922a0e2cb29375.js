System.register([], function (_export, _context) {
  "use strict";

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }

    return array;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", arrayPush);
    }
  };
});
//# sourceMappingURL=7b21c227323541e9b489cc5e8f922a0e2cb29375.js.map