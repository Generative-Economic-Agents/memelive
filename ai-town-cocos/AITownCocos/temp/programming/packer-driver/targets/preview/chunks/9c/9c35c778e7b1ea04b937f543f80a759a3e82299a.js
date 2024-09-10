System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseForOwn;

  /**
   * The base implementation of `_.invert` and `_.invertBy` which inverts
   * `object` with values transformed by `iteratee` and set by `setter`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform values.
   * @param {Object} accumulator The initial inverted object.
   * @returns {Function} Returns `accumulator`.
   */
  function baseInverter(object, setter, iteratee, accumulator) {
    baseForOwn(object, function (value, key, object) {
      setter(accumulator, iteratee(value), key, object);
    });
    return accumulator;
  }

  return {
    setters: [function (_unresolved_) {
      baseForOwn = _unresolved_.default;
    }],
    execute: function () {
      _export("default", baseInverter);
    }
  };
});
//# sourceMappingURL=9c35c778e7b1ea04b937f543f80a759a3e82299a.js.map