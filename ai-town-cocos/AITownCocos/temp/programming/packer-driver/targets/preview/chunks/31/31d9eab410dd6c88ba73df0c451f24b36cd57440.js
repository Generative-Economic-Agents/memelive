System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseGetTag, isObject, asyncTag, funcTag, genTag, proxyTag;

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    } // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.


    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  return {
    setters: [function (_unresolved_) {
      baseGetTag = _unresolved_.default;
    }, function (_unresolved_2) {
      isObject = _unresolved_2.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      asyncTag = '[object AsyncFunction]';
      funcTag = '[object Function]';
      genTag = '[object GeneratorFunction]';
      proxyTag = '[object Proxy]';

      _export("default", isFunction);
    }
  };
});
//# sourceMappingURL=31d9eab410dd6c88ba73df0c451f24b36cd57440.js.map