System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var copyArray, shuffleSelf;

  /**
   * A specialized version of `_.shuffle` for arrays.
   *
   * @private
   * @param {Array} array The array to shuffle.
   * @returns {Array} Returns the new shuffled array.
   */
  function arrayShuffle(array) {
    return shuffleSelf(copyArray(array));
  }

  return {
    setters: [function (_unresolved_) {
      copyArray = _unresolved_.default;
    }, function (_unresolved_2) {
      shuffleSelf = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", arrayShuffle);
    }
  };
});
//# sourceMappingURL=b4b5ecbaa7c61dabd983e84b95f34c6346226042.js.map