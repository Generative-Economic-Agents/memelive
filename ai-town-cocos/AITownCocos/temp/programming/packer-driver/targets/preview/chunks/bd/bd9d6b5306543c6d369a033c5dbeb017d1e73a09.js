System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var eq, isArrayLike, isIndex, isObject;

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }

    var type = typeof index;

    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
      return eq(object[index], value);
    }

    return false;
  }

  return {
    setters: [function (_unresolved_) {
      eq = _unresolved_.default;
    }, function (_unresolved_2) {
      isArrayLike = _unresolved_2.default;
    }, function (_unresolved_3) {
      isIndex = _unresolved_3.default;
    }, function (_unresolved_4) {
      isObject = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", isIterateeCall);
    }
  };
});
//# sourceMappingURL=bd9d6b5306543c6d369a033c5dbeb017d1e73a09.js.map