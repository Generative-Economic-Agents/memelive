System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseGetTag, isObjectLike, isPlainObject, domExcTag, errorTag;

  /**
   * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
   * `SyntaxError`, `TypeError`, or `URIError` object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
   * @example
   *
   * _.isError(new Error);
   * // => true
   *
   * _.isError(Error);
   * // => false
   */
  function isError(value) {
    if (!isObjectLike(value)) {
      return false;
    }

    var tag = baseGetTag(value);
    return tag == errorTag || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value);
  }

  return {
    setters: [function (_unresolved_) {
      baseGetTag = _unresolved_.default;
    }, function (_unresolved_2) {
      isObjectLike = _unresolved_2.default;
    }, function (_unresolved_3) {
      isPlainObject = _unresolved_3.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      domExcTag = '[object DOMException]';
      errorTag = '[object Error]';

      _export("default", isError);
    }
  };
});
//# sourceMappingURL=a590bfccd1808bb48c1f9844a88ed337e5c2997a.js.map