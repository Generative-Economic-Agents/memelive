System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseSlice;

  /**
   * Casts `array` to a slice if it's needed.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {number} start The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the cast slice.
   */
  function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
  }

  return {
    setters: [function (_unresolved_) {
      baseSlice = _unresolved_.default;
    }],
    execute: function () {
      _export("default", castSlice);
    }
  };
});
//# sourceMappingURL=b3c4e0d9bc6a01a77742c472e99b92c8c8635690.js.map