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
//# sourceMappingURL=c130d340ccebd4831a14e9bf507b528564302a07.js.map