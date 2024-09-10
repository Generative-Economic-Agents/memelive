System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var apply, arrayMap, baseFlatten, baseIteratee, baseRest, baseUnary, castRest, isArray, nativeMin, overArgs;
  return {
    setters: [function (_unresolved_) {
      apply = _unresolved_.default;
    }, function (_unresolved_2) {
      arrayMap = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseFlatten = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseIteratee = _unresolved_4.default;
    }, function (_unresolved_5) {
      baseRest = _unresolved_5.default;
    }, function (_unresolved_6) {
      baseUnary = _unresolved_6.default;
    }, function (_unresolved_7) {
      castRest = _unresolved_7.default;
    }, function (_unresolved_8) {
      isArray = _unresolved_8.default;
    }],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeMin = Math.min;
      /**
       * Creates a function that invokes `func` with its arguments transformed.
       *
       * @static
       * @since 4.0.0
       * @memberOf _
       * @category Function
       * @param {Function} func The function to wrap.
       * @param {...(Function|Function[])} [transforms=[_.identity]]
       *  The argument transforms.
       * @returns {Function} Returns the new function.
       * @example
       *
       * function doubled(n) {
       *   return n * 2;
       * }
       *
       * function square(n) {
       *   return n * n;
       * }
       *
       * var func = _.overArgs(function(x, y) {
       *   return [x, y];
       * }, [square, doubled]);
       *
       * func(9, 3);
       * // => [81, 6]
       *
       * func(10, 5);
       * // => [100, 10]
       */

      overArgs = castRest(function (func, transforms) {
        transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(baseIteratee)) : arrayMap(baseFlatten(transforms, 1), baseUnary(baseIteratee));
        var funcsLength = transforms.length;
        return baseRest(function (args) {
          var index = -1,
              length = nativeMin(args.length, funcsLength);

          while (++index < length) {
            args[index] = transforms[index].call(this, args[index]);
          }

          return apply(func, this, args);
        });
      });

      _export("default", overArgs);
    }
  };
});
//# sourceMappingURL=6ae5230340635abe4a731ece518ef7754a8f4be2.js.map