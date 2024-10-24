System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseInvoke, baseRest, methodOf;
  return {
    setters: [function (_unresolved_) {
      baseInvoke = _unresolved_.default;
    }, function (_unresolved_2) {
      baseRest = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * The opposite of `_.method`; this method creates a function that invokes
       * the method at a given path of `object`. Any additional arguments are
       * provided to the invoked method.
       *
       * @static
       * @memberOf _
       * @since 3.7.0
       * @category Util
       * @param {Object} object The object to query.
       * @param {...*} [args] The arguments to invoke the method with.
       * @returns {Function} Returns the new invoker function.
       * @example
       *
       * var array = _.times(3, _.constant),
       *     object = { 'a': array, 'b': array, 'c': array };
       *
       * _.map(['a[2]', 'c[0]'], _.methodOf(object));
       * // => [2, 0]
       *
       * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
       * // => [2, 0]
       */
      methodOf = baseRest(function (object, args) {
        return function (path) {
          return baseInvoke(object, path, args);
        };
      });

      _export("default", methodOf);
    }
  };
});
//# sourceMappingURL=5317f5c60707f433065ce11f7c8a8b3475d1c1cb.js.map