System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseInvoke, baseRest, invoke;
  return {
    setters: [function (_unresolved_) {
      baseInvoke = _unresolved_.default;
    }, function (_unresolved_2) {
      baseRest = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Invokes the method at `path` of `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The object to query.
       * @param {Array|string} path The path of the method to invoke.
       * @param {...*} [args] The arguments to invoke the method with.
       * @returns {*} Returns the result of the invoked method.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
       *
       * _.invoke(object, 'a[0].b.c.slice', 1, 3);
       * // => [2, 3]
       */
      invoke = baseRest(baseInvoke);

      _export("default", invoke);
    }
  };
});
//# sourceMappingURL=07282d73520520671d10120735c547172af94d87.js.map