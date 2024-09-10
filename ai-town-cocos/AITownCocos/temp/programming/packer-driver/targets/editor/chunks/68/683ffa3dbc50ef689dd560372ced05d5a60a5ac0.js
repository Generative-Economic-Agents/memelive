System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var baseIsEqual, get, hasIn, isKey, isStrictComparable, matchesStrictComparable, toKey, COMPARE_PARTIAL_FLAG, COMPARE_UNORDERED_FLAG;

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }

    return function (object) {
      var objValue = get(object, path);
      return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }

  return {
    setters: [function (_unresolved_) {
      baseIsEqual = _unresolved_.default;
    }, function (_unresolved_2) {
      get = _unresolved_2.default;
    }, function (_unresolved_3) {
      hasIn = _unresolved_3.default;
    }, function (_unresolved_4) {
      isKey = _unresolved_4.default;
    }, function (_unresolved_5) {
      isStrictComparable = _unresolved_5.default;
    }, function (_unresolved_6) {
      matchesStrictComparable = _unresolved_6.default;
    }, function (_unresolved_7) {
      toKey = _unresolved_7.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for value comparisons. */
      COMPARE_PARTIAL_FLAG = 1;
      COMPARE_UNORDERED_FLAG = 2;

      _export("default", baseMatchesProperty);
    }
  };
});
//# sourceMappingURL=683ffa3dbc50ef689dd560372ced05d5a60a5ac0.js.map