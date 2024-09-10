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
//# sourceMappingURL=31d256cc721613645e90181fb5576589faa2381d.js.map