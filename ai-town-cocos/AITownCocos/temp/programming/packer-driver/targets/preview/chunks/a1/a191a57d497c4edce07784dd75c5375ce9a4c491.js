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
//# sourceMappingURL=a191a57d497c4edce07784dd75c5375ce9a4c491.js.map