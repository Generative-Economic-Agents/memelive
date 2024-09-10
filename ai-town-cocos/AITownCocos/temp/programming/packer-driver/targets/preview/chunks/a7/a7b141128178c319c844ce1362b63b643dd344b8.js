System.register([], function (_export, _context) {
  "use strict";

  var arrayProto, nativeJoin;

  /**
   * Converts all elements in `array` into a string separated by `separator`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to convert.
   * @param {string} [separator=','] The element separator.
   * @returns {string} Returns the joined string.
   * @example
   *
   * _.join(['a', 'b', 'c'], '~');
   * // => 'a~b~c'
   */
  function join(array, separator) {
    return array == null ? '' : nativeJoin.call(array, separator);
  }

  return {
    setters: [],
    execute: function () {
      /** Used for built-in method references. */
      arrayProto = Array.prototype;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      nativeJoin = arrayProto.join;

      _export("default", join);
    }
  };
});
//# sourceMappingURL=a7b141128178c319c844ce1362b63b643dd344b8.js.map