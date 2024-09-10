System.register([], function (_export, _context) {
  "use strict";

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);
    map.forEach(function (value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", mapToArray);
    }
  };
});
//# sourceMappingURL=26ce5dad38f06514b188d6acedc03488771062b1.js.map