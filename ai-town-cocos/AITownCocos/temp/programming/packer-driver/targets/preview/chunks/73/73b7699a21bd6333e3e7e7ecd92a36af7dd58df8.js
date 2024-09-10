System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseExtremum, baseLt, identity;

  /**
   * Computes the minimum value of `array`. If `array` is empty or falsey,
   * `undefined` is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the minimum value.
   * @example
   *
   * _.min([4, 2, 8, 6]);
   * // => 2
   *
   * _.min([]);
   * // => undefined
   */
  function min(array) {
    return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
  }

  return {
    setters: [function (_unresolved_) {
      baseExtremum = _unresolved_.default;
    }, function (_unresolved_2) {
      baseLt = _unresolved_2.default;
    }, function (_unresolved_3) {
      identity = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", min);
    }
  };
});
//# sourceMappingURL=73b7699a21bd6333e3e7e7ecd92a36af7dd58df8.js.map