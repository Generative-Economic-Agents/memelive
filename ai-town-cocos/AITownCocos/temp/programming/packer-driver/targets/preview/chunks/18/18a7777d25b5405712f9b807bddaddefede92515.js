System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseRest, pullAll, pull;
  return {
    setters: [function (_unresolved_) {
      baseRest = _unresolved_.default;
    }, function (_unresolved_2) {
      pullAll = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Removes all given values from `array` using
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
       * to remove elements from an array by predicate.
       *
       * @static
       * @memberOf _
       * @since 2.0.0
       * @category Array
       * @param {Array} array The array to modify.
       * @param {...*} [values] The values to remove.
       * @returns {Array} Returns `array`.
       * @example
       *
       * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
       *
       * _.pull(array, 'a', 'c');
       * console.log(array);
       * // => ['b', 'b']
       */
      pull = baseRest(pullAll);

      _export("default", pull);
    }
  };
});
//# sourceMappingURL=18a7777d25b5405712f9b807bddaddefede92515.js.map