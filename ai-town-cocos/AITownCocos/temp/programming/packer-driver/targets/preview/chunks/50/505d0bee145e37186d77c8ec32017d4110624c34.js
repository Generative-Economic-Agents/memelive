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
//# sourceMappingURL=505d0bee145e37186d77c8ec32017d4110624c34.js.map