System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var LazyWrapper;

  /**
   * Reverses the direction of lazy iteration.
   *
   * @private
   * @name reverse
   * @memberOf LazyWrapper
   * @returns {Object} Returns the new reversed `LazyWrapper` object.
   */
  function lazyReverse() {
    if (this.__filtered__) {
      var result = new LazyWrapper(this);
      result.__dir__ = -1;
      result.__filtered__ = true;
    } else {
      result = this.clone();
      result.__dir__ *= -1;
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      LazyWrapper = _unresolved_.default;
    }],
    execute: function () {
      _export("default", lazyReverse);
    }
  };
});
//# sourceMappingURL=41dea08462358367b148d8aad954fc72c1b651e3.js.map