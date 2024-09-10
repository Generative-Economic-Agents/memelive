System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseInvoke, baseRest, method;
  return {
    setters: [function (_unresolved_) {
      baseInvoke = _unresolved_.default;
    }, function (_unresolved_2) {
      baseRest = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Creates a function that invokes the method at `path` of a given object.
       * Any additional arguments are provided to the invoked method.
       *
       * @static
       * @memberOf _
       * @since 3.7.0
       * @category Util
       * @param {Array|string} path The path of the method to invoke.
       * @param {...*} [args] The arguments to invoke the method with.
       * @returns {Function} Returns the new invoker function.
       * @example
       *
       * var objects = [
       *   { 'a': { 'b': _.constant(2) } },
       *   { 'a': { 'b': _.constant(1) } }
       * ];
       *
       * _.map(objects, _.method('a.b'));
       * // => [2, 1]
       *
       * _.map(objects, _.method(['a', 'b']));
       * // => [2, 1]
       */
      method = baseRest(function (path, args) {
        return function (object) {
          return baseInvoke(object, path, args);
        };
      });

      _export("default", method);
    }
  };
});
//# sourceMappingURL=ebc0729a06b18a7d328963eb88ae8a057f905122.js.map