System.register([], function (_export, _context) {
  "use strict";

  var objectProto, nativeObjectToString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  return {
    setters: [],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */

      nativeObjectToString = objectProto.toString;

      _export("default", objectToString);
    }
  };
});
//# sourceMappingURL=19ea6daf922b0838d7faf847b2df9a2d5ec2646f.js.map