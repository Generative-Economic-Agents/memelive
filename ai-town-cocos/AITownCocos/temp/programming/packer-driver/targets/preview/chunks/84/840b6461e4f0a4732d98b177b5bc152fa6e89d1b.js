System.register([], function (_export, _context) {
  "use strict";

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);
    set.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", setToArray);
    }
  };
});
//# sourceMappingURL=840b6461e4f0a4732d98b177b5bc152fa6e89d1b.js.map