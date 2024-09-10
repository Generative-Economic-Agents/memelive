System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseDelay, baseRest, toNumber, delay;
  return {
    setters: [function (_unresolved_) {
      baseDelay = _unresolved_.default;
    }, function (_unresolved_2) {
      baseRest = _unresolved_2.default;
    }, function (_unresolved_3) {
      toNumber = _unresolved_3.default;
    }],
    execute: function () {
      /**
       * Invokes `func` after `wait` milliseconds. Any additional arguments are
       * provided to `func` when it's invoked.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to delay.
       * @param {number} wait The number of milliseconds to delay invocation.
       * @param {...*} [args] The arguments to invoke `func` with.
       * @returns {number} Returns the timer id.
       * @example
       *
       * _.delay(function(text) {
       *   console.log(text);
       * }, 1000, 'later');
       * // => Logs 'later' after one second.
       */
      delay = baseRest(function (func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });

      _export("default", delay);
    }
  };
});
//# sourceMappingURL=dbc774364efb527816ab16e9dc9d5fc4d68dc468.js.map