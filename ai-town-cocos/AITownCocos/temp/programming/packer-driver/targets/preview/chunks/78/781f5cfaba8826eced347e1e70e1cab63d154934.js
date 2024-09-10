System.register([], function (_export, _context) {
  "use strict";

  var HOT_COUNT, HOT_SPAN, nativeNow;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
        lastCalled = 0;
    return function () {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;

      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }

      return func.apply(undefined, arguments);
    };
  }

  return {
    setters: [],
    execute: function () {
      /** Used to detect hot functions by number of calls within a span of milliseconds. */
      HOT_COUNT = 800;
      HOT_SPAN = 16;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      nativeNow = Date.now;

      _export("default", shortOut);
    }
  };
});
//# sourceMappingURL=781f5cfaba8826eced347e1e70e1cab63d154934.js.map