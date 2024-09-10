System.register([], function (_export, _context) {
  "use strict";

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;
    array || (array = Array(length));

    while (++index < length) {
      array[index] = source[index];
    }

    return array;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", copyArray);
    }
  };
});
//# sourceMappingURL=cc515d47b779010b4a1b9dc76236c0a4e91f86c8.js.map