System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var memoize, MAX_MEMOIZE_SIZE;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function (key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }

      return key;
    });
    var cache = result.cache;
    return result;
  }

  return {
    setters: [function (_unresolved_) {
      memoize = _unresolved_.default;
    }],
    execute: function () {
      /** Used as the maximum memoize cache size. */
      MAX_MEMOIZE_SIZE = 500;

      _export("default", memoizeCapped);
    }
  };
});
//# sourceMappingURL=894ab8689022ed4be78ad0478aaf193f3e308b21.js.map