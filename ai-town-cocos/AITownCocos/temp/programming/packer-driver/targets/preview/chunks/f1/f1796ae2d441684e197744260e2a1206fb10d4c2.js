System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var Symbol, objectProto, hasOwnProperty, nativeObjectToString, symToStringTag;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      Symbol = _unresolved_.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */

      nativeObjectToString = objectProto.toString;
      /** Built-in value references. */

      symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      _export("default", getRawTag);
    }
  };
});
//# sourceMappingURL=f1796ae2d441684e197744260e2a1206fb10d4c2.js.map