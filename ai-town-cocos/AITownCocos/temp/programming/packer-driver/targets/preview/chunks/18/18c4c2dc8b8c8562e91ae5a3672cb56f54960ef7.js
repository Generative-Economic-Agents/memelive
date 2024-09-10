System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var shuffleSelf, values;

  /**
   * The base implementation of `_.shuffle`.
   *
   * @private
   * @param {Array|Object} collection The collection to shuffle.
   * @returns {Array} Returns the new shuffled array.
   */
  function baseShuffle(collection) {
    return shuffleSelf(values(collection));
  }

  return {
    setters: [function (_unresolved_) {
      shuffleSelf = _unresolved_.default;
    }, function (_unresolved_2) {
      values = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseShuffle);
    }
  };
});
//# sourceMappingURL=18c4c2dc8b8c8562e91ae5a3672cb56f54960ef7.js.map