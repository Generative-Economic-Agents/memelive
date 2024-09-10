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
//# sourceMappingURL=bd96a944f01c3b6621f522fa02a36defb96fcef9.js.map