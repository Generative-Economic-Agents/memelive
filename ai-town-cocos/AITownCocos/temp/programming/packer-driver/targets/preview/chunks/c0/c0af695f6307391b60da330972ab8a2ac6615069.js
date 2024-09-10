System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var toInteger, FUNC_ERROR_TEXT;

  /**
   * The opposite of `_.before`; this method creates a function that invokes
   * `func` once it's called `n` or more times.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {number} n The number of calls before `func` is invoked.
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * var saves = ['profile', 'settings'];
   *
   * var done = _.after(saves.length, function() {
   *   console.log('done saving!');
   * });
   *
   * _.forEach(saves, function(type) {
   *   asyncSave({ 'type': type, 'complete': done });
   * });
   * // => Logs 'done saving!' after the two async saves have completed.
   */
  function after(n, func) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    n = toInteger(n);
    return function () {
      if (--n < 1) {
        return func.apply(this, arguments);
      }
    };
  }

  return {
    setters: [function (_unresolved_) {
      toInteger = _unresolved_.default;
    }],
    execute: function () {
      /** Error message constants. */
      FUNC_ERROR_TEXT = 'Expected a function';

      _export("default", after);
    }
  };
});
//# sourceMappingURL=c0af695f6307391b60da330972ab8a2ac6615069.js.map