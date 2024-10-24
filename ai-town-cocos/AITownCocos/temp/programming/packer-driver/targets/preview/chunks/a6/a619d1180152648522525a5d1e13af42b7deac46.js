System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseIsNative, isMaskable, CORE_ERROR_TEXT;

  /**
   * Checks if `value` is a pristine native function.
   *
   * **Note:** This method can't reliably detect native functions in the presence
   * of the core-js package because core-js circumvents this kind of detection.
   * Despite multiple requests, the core-js maintainer has made it clear: any
   * attempt to fix the detection will be obstructed. As a result, we're left
   * with little choice but to throw an error. Unfortunately, this also affects
   * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
   * which rely on core-js.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   * @example
   *
   * _.isNative(Array.prototype.push);
   * // => true
   *
   * _.isNative(_);
   * // => false
   */
  function isNative(value) {
    if (isMaskable(value)) {
      throw new Error(CORE_ERROR_TEXT);
    }

    return baseIsNative(value);
  }

  return {
    setters: [function (_unresolved_) {
      baseIsNative = _unresolved_.default;
    }, function (_unresolved_2) {
      isMaskable = _unresolved_2.default;
    }],
    execute: function () {
      /** Error message constants. */
      CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.';

      _export("default", isNative);
    }
  };
});
//# sourceMappingURL=a619d1180152648522525a5d1e13af42b7deac46.js.map