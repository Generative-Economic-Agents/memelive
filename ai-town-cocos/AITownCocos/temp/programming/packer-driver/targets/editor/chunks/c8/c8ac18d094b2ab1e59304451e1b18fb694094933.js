System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var castFunction, partial;

  /**
   * Creates a function that provides `value` to `wrapper` as its first
   * argument. Any additional arguments provided to the function are appended
   * to those provided to the `wrapper`. The wrapper is invoked with the `this`
   * binding of the created function.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {*} value The value to wrap.
   * @param {Function} [wrapper=identity] The wrapper function.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var p = _.wrap(_.escape, function(func, text) {
   *   return '<p>' + func(text) + '</p>';
   * });
   *
   * p('fred, barney, & pebbles');
   * // => '<p>fred, barney, &amp; pebbles</p>'
   */
  function wrap(value, wrapper) {
    return partial(castFunction(wrapper), value);
  }

  return {
    setters: [function (_unresolved_) {
      castFunction = _unresolved_.default;
    }, function (_unresolved_2) {
      partial = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", wrap);
    }
  };
});
//# sourceMappingURL=c8ac18d094b2ab1e59304451e1b18fb694094933.js.map