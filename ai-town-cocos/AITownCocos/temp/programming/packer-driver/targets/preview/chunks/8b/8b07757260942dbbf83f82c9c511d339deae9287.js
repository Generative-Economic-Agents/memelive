System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var apply, baseRest, isError, attempt;
  return {
    setters: [function (_unresolved_) {
      apply = _unresolved_.default;
    }, function (_unresolved_2) {
      baseRest = _unresolved_2.default;
    }, function (_unresolved_3) {
      isError = _unresolved_3.default;
    }],
    execute: function () {
      /**
       * Attempts to invoke `func`, returning either the result or the caught error
       * object. Any additional arguments are provided to `func` when it's invoked.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Util
       * @param {Function} func The function to attempt.
       * @param {...*} [args] The arguments to invoke `func` with.
       * @returns {*} Returns the `func` result or error object.
       * @example
       *
       * // Avoid throwing errors for invalid selectors.
       * var elements = _.attempt(function(selector) {
       *   return document.querySelectorAll(selector);
       * }, '>_>');
       *
       * if (_.isError(elements)) {
       *   elements = [];
       * }
       */
      attempt = baseRest(function (func, args) {
        try {
          return apply(func, undefined, args);
        } catch (e) {
          return isError(e) ? e : new Error(e);
        }
      });

      _export("default", attempt);
    }
  };
});
//# sourceMappingURL=8b07757260942dbbf83f82c9c511d339deae9287.js.map