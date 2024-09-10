System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var isPrototype, nativeKeys, objectProto, hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      isPrototype = _unresolved_.default;
    }, function (_unresolved_2) {
      nativeKeys = _unresolved_2.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;

      _export("default", baseKeys);
    }
  };
});
//# sourceMappingURL=b576a51f97851f57e71bc8da92493eb7f12a6c7b.js.map