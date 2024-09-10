System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var arrayMap, copyArray, isArray, isSymbol, stringToPath, toKey, toString;

  /**
   * Converts `value` to a property path array.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {*} value The value to convert.
   * @returns {Array} Returns the new property path array.
   * @example
   *
   * _.toPath('a.b.c');
   * // => ['a', 'b', 'c']
   *
   * _.toPath('a[0].b.c');
   * // => ['a', '0', 'b', 'c']
   */
  function toPath(value) {
    if (isArray(value)) {
      return arrayMap(value, toKey);
    }

    return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
  }

  return {
    setters: [function (_unresolved_) {
      arrayMap = _unresolved_.default;
    }, function (_unresolved_2) {
      copyArray = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArray = _unresolved_3.default;
    }, function (_unresolved_4) {
      isSymbol = _unresolved_4.default;
    }, function (_unresolved_5) {
      stringToPath = _unresolved_5.default;
    }, function (_unresolved_6) {
      toKey = _unresolved_6.default;
    }, function (_unresolved_7) {
      toString = _unresolved_7.default;
    }],
    execute: function () {
      _export("default", toPath);
    }
  };
});
//# sourceMappingURL=03ec53e6b308e107e3db8400927ad2e12c671a6b.js.map