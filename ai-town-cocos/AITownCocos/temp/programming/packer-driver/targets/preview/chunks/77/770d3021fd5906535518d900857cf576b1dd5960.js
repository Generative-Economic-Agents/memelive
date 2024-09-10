System.register([], function (_export, _context) {
  "use strict";

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);
    set.forEach(function (value) {
      result[++index] = [value, value];
    });
    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", setToPairs);
    }
  };
});
//# sourceMappingURL=770d3021fd5906535518d900857cf576b1dd5960.js.map