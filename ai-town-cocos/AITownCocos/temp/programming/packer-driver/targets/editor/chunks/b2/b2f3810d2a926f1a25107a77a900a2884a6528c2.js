System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var Symbol, getRawTag, objectToString, nullTag, undefinedTag, symToStringTag;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  return {
    setters: [function (_unresolved_) {
      Symbol = _unresolved_.default;
    }, function (_unresolved_2) {
      getRawTag = _unresolved_2.default;
    }, function (_unresolved_3) {
      objectToString = _unresolved_3.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      nullTag = '[object Null]';
      undefinedTag = '[object Undefined]';
      /** Built-in value references. */

      symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      _export("default", baseGetTag);
    }
  };
});
//# sourceMappingURL=b2f3810d2a926f1a25107a77a900a2884a6528c2.js.map