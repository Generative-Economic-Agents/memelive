System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseAssignValue, eq, objectProto, hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];

    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }

  return {
    setters: [function (_unresolved_) {
      baseAssignValue = _unresolved_.default;
    }, function (_unresolved_2) {
      eq = _unresolved_2.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;

      _export("default", assignValue);
    }
  };
});
//# sourceMappingURL=ceb5fb87be3c77bf0f3a08719e9a6bc5351db2dd.js.map