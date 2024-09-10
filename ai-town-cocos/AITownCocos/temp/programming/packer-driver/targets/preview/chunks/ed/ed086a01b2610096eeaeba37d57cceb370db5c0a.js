System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var isObject, isPrototype, nativeKeysIn, objectProto, hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }

    var isProto = isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      isObject = _unresolved_.default;
    }, function (_unresolved_2) {
      isPrototype = _unresolved_2.default;
    }, function (_unresolved_3) {
      nativeKeysIn = _unresolved_3.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;

      _export("default", baseKeysIn);
    }
  };
});
//# sourceMappingURL=ed086a01b2610096eeaeba37d57cceb370db5c0a.js.map