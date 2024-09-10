System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseDelay, baseRest, defer;
  return {
    setters: [function (_unresolved_) {
      baseDelay = _unresolved_.default;
    }, function (_unresolved_2) {
      baseRest = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Defers invoking the `func` until the current call stack has cleared. Any
       * additional arguments are provided to `func` when it's invoked.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to defer.
       * @param {...*} [args] The arguments to invoke `func` with.
       * @returns {number} Returns the timer id.
       * @example
       *
       * _.defer(function(text) {
       *   console.log(text);
       * }, 'deferred');
       * // => Logs 'deferred' after one millisecond.
       */
      defer = baseRest(function (func, args) {
        return baseDelay(func, 1, args);
      });

      _export("default", defer);
    }
  };
});
//# sourceMappingURL=2824b28fb958abc4d6839dfaa3a14aa59abb59ab.js.map