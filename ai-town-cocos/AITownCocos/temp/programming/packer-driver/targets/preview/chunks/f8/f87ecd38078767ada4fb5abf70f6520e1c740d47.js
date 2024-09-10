System.register([], function (_export, _context) {
  "use strict";

  var nativeMax;

  /**
   * Creates an array that is the composition of partially applied arguments,
   * placeholders, and provided arguments into a single array of arguments.
   *
   * @private
   * @param {Array} args The provided arguments.
   * @param {Array} partials The arguments to prepend to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @params {boolean} [isCurried] Specify composing for a curried function.
   * @returns {Array} Returns the new array of composed arguments.
   */
  function composeArgs(args, partials, holders, isCurried) {
    var argsIndex = -1,
        argsLength = args.length,
        holdersLength = holders.length,
        leftIndex = -1,
        leftLength = partials.length,
        rangeLength = nativeMax(argsLength - holdersLength, 0),
        result = Array(leftLength + rangeLength),
        isUncurried = !isCurried;

    while (++leftIndex < leftLength) {
      result[leftIndex] = partials[leftIndex];
    }

    while (++argsIndex < holdersLength) {
      if (isUncurried || argsIndex < argsLength) {
        result[holders[argsIndex]] = args[argsIndex];
      }
    }

    while (rangeLength--) {
      result[leftIndex++] = args[argsIndex++];
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeMax = Math.max;

      _export("default", composeArgs);
    }
  };
});
//# sourceMappingURL=f87ecd38078767ada4fb5abf70f6520e1c740d47.js.map