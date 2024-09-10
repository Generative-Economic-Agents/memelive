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
//# sourceMappingURL=d8fb82d1a051f264ce87427064a1a2fe06a39096.js.map