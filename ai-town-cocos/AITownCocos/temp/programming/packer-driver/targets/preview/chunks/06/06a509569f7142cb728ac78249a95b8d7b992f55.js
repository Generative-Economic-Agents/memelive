System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseExtremum, baseGt, identity;

  /**
   * Computes the maximum value of `array`. If `array` is empty or falsey,
   * `undefined` is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * _.max([4, 2, 8, 6]);
   * // => 8
   *
   * _.max([]);
   * // => undefined
   */
  function max(array) {
    return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
  }

  return {
    setters: [function (_unresolved_) {
      baseExtremum = _unresolved_.default;
    }, function (_unresolved_2) {
      baseGt = _unresolved_2.default;
    }, function (_unresolved_3) {
      identity = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", max);
    }
  };
});
//# sourceMappingURL=06a509569f7142cb728ac78249a95b8d7b992f55.js.map