System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var isStrictComparable, keys;

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = keys(object),
        length = result.length;

    while (length--) {
      var key = result[length],
          value = object[key];
      result[length] = [key, value, isStrictComparable(value)];
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      isStrictComparable = _unresolved_.default;
    }, function (_unresolved_2) {
      keys = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", getMatchData);
    }
  };
});
//# sourceMappingURL=e1bd0975e7762e6bb6b1a694070a73ce1edf6e5d.js.map