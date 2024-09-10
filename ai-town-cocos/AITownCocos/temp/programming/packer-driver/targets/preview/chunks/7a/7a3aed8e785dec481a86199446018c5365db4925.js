System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var castPath, isArguments, isArray, isIndex, isLength, toKey;

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
      var key = toKey(path[index]);

      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }

      object = object[key];
    }

    if (result || ++index != length) {
      return result;
    }

    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
  }

  return {
    setters: [function (_unresolved_) {
      castPath = _unresolved_.default;
    }, function (_unresolved_2) {
      isArguments = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArray = _unresolved_3.default;
    }, function (_unresolved_4) {
      isIndex = _unresolved_4.default;
    }, function (_unresolved_5) {
      isLength = _unresolved_5.default;
    }, function (_unresolved_6) {
      toKey = _unresolved_6.default;
    }],
    execute: function () {
      _export("default", hasPath);
    }
  };
});
//# sourceMappingURL=7a3aed8e785dec481a86199446018c5365db4925.js.map