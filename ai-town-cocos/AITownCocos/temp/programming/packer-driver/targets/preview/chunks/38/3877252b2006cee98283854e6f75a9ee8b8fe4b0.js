System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var isObjectLike, isPlainObject;

  /**
   * Checks if `value` is likely a DOM element.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
   * @example
   *
   * _.isElement(document.body);
   * // => true
   *
   * _.isElement('<body>');
   * // => false
   */
  function isElement(value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
  }

  return {
    setters: [function (_unresolved_) {
      isObjectLike = _unresolved_.default;
    }, function (_unresolved_2) {
      isPlainObject = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", isElement);
    }
  };
});
//# sourceMappingURL=3877252b2006cee98283854e6f75a9ee8b8fe4b0.js.map