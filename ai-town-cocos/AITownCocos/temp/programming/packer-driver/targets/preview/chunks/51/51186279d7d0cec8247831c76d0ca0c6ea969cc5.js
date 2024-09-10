System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var arraySample, values;

  /**
   * The base implementation of `_.sample`.
   *
   * @private
   * @param {Array|Object} collection The collection to sample.
   * @returns {*} Returns the random element.
   */
  function baseSample(collection) {
    return arraySample(values(collection));
  }

  return {
    setters: [function (_unresolved_) {
      arraySample = _unresolved_.default;
    }, function (_unresolved_2) {
      values = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseSample);
    }
  };
});
//# sourceMappingURL=51186279d7d0cec8247831c76d0ca0c6ea969cc5.js.map