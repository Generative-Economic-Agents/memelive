System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var apply, arrayMap, baseIteratee, baseRest, FUNC_ERROR_TEXT;

  /**
   * Creates a function that iterates over `pairs` and invokes the corresponding
   * function of the first predicate to return truthy. The predicate-function
   * pairs are invoked with the `this` binding and arguments of the created
   * function.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {Array} pairs The predicate-function pairs.
   * @returns {Function} Returns the new composite function.
   * @example
   *
   * var func = _.cond([
   *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
   *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
   *   [_.stubTrue,                      _.constant('no match')]
   * ]);
   *
   * func({ 'a': 1, 'b': 2 });
   * // => 'matches A'
   *
   * func({ 'a': 0, 'b': 1 });
   * // => 'matches B'
   *
   * func({ 'a': '1', 'b': '2' });
   * // => 'no match'
   */
  function cond(pairs) {
    var length = pairs == null ? 0 : pairs.length,
        toIteratee = baseIteratee;
    pairs = !length ? [] : arrayMap(pairs, function (pair) {
      if (typeof pair[1] != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      return [toIteratee(pair[0]), pair[1]];
    });
    return baseRest(function (args) {
      var index = -1;

      while (++index < length) {
        var pair = pairs[index];

        if (apply(pair[0], this, args)) {
          return apply(pair[1], this, args);
        }
      }
    });
  }

  return {
    setters: [function (_unresolved_) {
      apply = _unresolved_.default;
    }, function (_unresolved_2) {
      arrayMap = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseIteratee = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseRest = _unresolved_4.default;
    }],
    execute: function () {
      /** Error message constants. */
      FUNC_ERROR_TEXT = 'Expected a function';

      _export("default", cond);
    }
  };
});
//# sourceMappingURL=0b0a2f5a528c77a3aa65e24b7ba7b1fcd4e8e362.js.map