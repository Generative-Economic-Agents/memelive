System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var get;

  /**
   * The base implementation of `_.at` without support for individual paths.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {string[]} paths The property paths to pick.
   * @returns {Array} Returns the picked elements.
   */
  function baseAt(object, paths) {
    var index = -1,
        length = paths.length,
        result = Array(length),
        skip = object == null;

    while (++index < length) {
      result[index] = skip ? undefined : get(object, paths[index]);
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      get = _unresolved_.default;
    }],
    execute: function () {
      _export("default", baseAt);
    }
  };
});
//# sourceMappingURL=2084a1e00029de7d5cbf9023f17ffa13b1ee1a54.js.map