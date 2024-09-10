System.register([], function (_export, _context) {
  "use strict";

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", iteratorToArray);
    }
  };
});
//# sourceMappingURL=d619c4aa4003353d89231fd2aa2d2bcfa6f27cfb.js.map