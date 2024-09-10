System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseGet, baseSet, castPath;

  /**
   * The base implementation of  `_.pickBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @param {Function} predicate The function invoked per property.
   * @returns {Object} Returns the new object.
   */
  function basePickBy(object, paths, predicate) {
    var index = -1,
        length = paths.length,
        result = {};

    while (++index < length) {
      var path = paths[index],
          value = baseGet(object, path);

      if (predicate(value, path)) {
        baseSet(result, castPath(path, object), value);
      }
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      baseGet = _unresolved_.default;
    }, function (_unresolved_2) {
      baseSet = _unresolved_2.default;
    }, function (_unresolved_3) {
      castPath = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", basePickBy);
    }
  };
});
//# sourceMappingURL=23f54dea03b7ed81a63fbae0eabf881f67440abd.js.map