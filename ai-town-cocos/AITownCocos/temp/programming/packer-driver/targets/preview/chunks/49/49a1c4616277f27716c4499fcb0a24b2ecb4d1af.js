System.register([], function (_export, _context) {
  "use strict";

  var nativeMax;

  /**
   * This function is like `composeArgs` except that the arguments composition
   * is tailored for `_.partialRight`.
   *
   * @private
   * @param {Array} args The provided arguments.
   * @param {Array} partials The arguments to append to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @params {boolean} [isCurried] Specify composing for a curried function.
   * @returns {Array} Returns the new array of composed arguments.
   */
  function composeArgsRight(args, partials, holders, isCurried) {
    var argsIndex = -1,
        argsLength = args.length,
        holdersIndex = -1,
        holdersLength = holders.length,
        rightIndex = -1,
        rightLength = partials.length,
        rangeLength = nativeMax(argsLength - holdersLength, 0),
        result = Array(rangeLength + rightLength),
        isUncurried = !isCurried;

    while (++argsIndex < rangeLength) {
      result[argsIndex] = args[argsIndex];
    }

    var offset = argsIndex;

    while (++rightIndex < rightLength) {
      result[offset + rightIndex] = partials[rightIndex];
    }

    while (++holdersIndex < holdersLength) {
      if (isUncurried || argsIndex < argsLength) {
        result[offset + holders[holdersIndex]] = args[argsIndex++];
      }
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeMax = Math.max;

      _export("default", composeArgsRight);
    }
  };
});
//# sourceMappingURL=49a1c4616277f27716c4499fcb0a24b2ecb4d1af.js.map