System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseWrapperValue;

  /**
   * Executes the chain sequence to resolve the unwrapped value.
   *
   * @name value
   * @memberOf _
   * @since 0.1.0
   * @alias toJSON, valueOf
   * @category Seq
   * @returns {*} Returns the resolved unwrapped value.
   * @example
   *
   * _([1, 2, 3]).value();
   * // => [1, 2, 3]
   */
  function wrapperValue() {
    return baseWrapperValue(this.__wrapped__, this.__actions__);
  }

  return {
    setters: [function (_unresolved_) {
      baseWrapperValue = _unresolved_.default;
    }],
    execute: function () {
      _export("default", wrapperValue);
    }
  };
});
//# sourceMappingURL=4df34d16de333b829e57f13211b89a442f357c6c.js.map