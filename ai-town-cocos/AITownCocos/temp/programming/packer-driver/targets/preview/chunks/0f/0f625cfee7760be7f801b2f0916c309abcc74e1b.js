System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var root, now;
  return {
    setters: [function (_unresolved_) {
      root = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Gets the timestamp of the number of milliseconds that have elapsed since
       * the Unix epoch (1 January 1970 00:00:00 UTC).
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Date
       * @returns {number} Returns the timestamp.
       * @example
       *
       * _.defer(function(stamp) {
       *   console.log(_.now() - stamp);
       * }, _.now());
       * // => Logs the number of milliseconds it took for the deferred invocation.
       */
      now = function now() {
        return root.Date.now();
      };

      _export("default", now);
    }
  };
});
//# sourceMappingURL=0f625cfee7760be7f801b2f0916c309abcc74e1b.js.map