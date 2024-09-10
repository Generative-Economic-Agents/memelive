System.register([], function (_export, _context) {
  "use strict";

  /**
   * Enables the wrapper to be iterable.
   *
   * @name Symbol.iterator
   * @memberOf _
   * @since 4.0.0
   * @category Seq
   * @returns {Object} Returns the wrapper object.
   * @example
   *
   * var wrapped = _([1, 2]);
   *
   * wrapped[Symbol.iterator]() === wrapped;
   * // => true
   *
   * Array.from(wrapped);
   * // => [1, 2]
   */
  function wrapperToIterator() {
    return this;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", wrapperToIterator);
    }
  };
});
//# sourceMappingURL=ce88cbd41c4befcc376c9c72be8aacb821e77d94.js.map