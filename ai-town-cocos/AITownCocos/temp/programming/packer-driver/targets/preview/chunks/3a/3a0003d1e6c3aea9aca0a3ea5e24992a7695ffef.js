System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseClone, CLONE_SYMBOLS_FLAG;

  /**
   * This method is like `_.clone` except that it accepts `customizer` which
   * is invoked to produce the cloned value. If `customizer` returns `undefined`,
   * cloning is handled by the method instead. The `customizer` is invoked with
   * up to four arguments; (value [, index|key, object, stack]).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to clone.
   * @param {Function} [customizer] The function to customize cloning.
   * @returns {*} Returns the cloned value.
   * @see _.cloneDeepWith
   * @example
   *
   * function customizer(value) {
   *   if (_.isElement(value)) {
   *     return value.cloneNode(false);
   *   }
   * }
   *
   * var el = _.cloneWith(document.body, customizer);
   *
   * console.log(el === document.body);
   * // => false
   * console.log(el.nodeName);
   * // => 'BODY'
   * console.log(el.childNodes.length);
   * // => 0
   */
  function cloneWith(value, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
  }

  return {
    setters: [function (_unresolved_) {
      baseClone = _unresolved_.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for cloning. */
      CLONE_SYMBOLS_FLAG = 4;

      _export("default", cloneWith);
    }
  };
});
//# sourceMappingURL=3a0003d1e6c3aea9aca0a3ea5e24992a7695ffef.js.map