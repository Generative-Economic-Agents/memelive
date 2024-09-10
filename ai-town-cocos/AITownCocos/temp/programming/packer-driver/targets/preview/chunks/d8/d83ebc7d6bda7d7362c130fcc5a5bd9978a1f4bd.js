System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseClone, CLONE_DEEP_FLAG, CLONE_SYMBOLS_FLAG;

  /**
   * This method is like `_.cloneWith` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @param {Function} [customizer] The function to customize cloning.
   * @returns {*} Returns the deep cloned value.
   * @see _.cloneWith
   * @example
   *
   * function customizer(value) {
   *   if (_.isElement(value)) {
   *     return value.cloneNode(true);
   *   }
   * }
   *
   * var el = _.cloneDeepWith(document.body, customizer);
   *
   * console.log(el === document.body);
   * // => false
   * console.log(el.nodeName);
   * // => 'BODY'
   * console.log(el.childNodes.length);
   * // => 20
   */
  function cloneDeepWith(value, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
  }

  return {
    setters: [function (_unresolved_) {
      baseClone = _unresolved_.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for cloning. */
      CLONE_DEEP_FLAG = 1;
      CLONE_SYMBOLS_FLAG = 4;

      _export("default", cloneDeepWith);
    }
  };
});
//# sourceMappingURL=d83ebc7d6bda7d7362c130fcc5a5bd9978a1f4bd.js.map