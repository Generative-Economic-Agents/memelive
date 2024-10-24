System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var castPath, toKey;

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }

    return index && index == length ? object : undefined;
  }

  return {
    setters: [function (_unresolved_) {
      castPath = _unresolved_.default;
    }, function (_unresolved_2) {
      toKey = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseGet);
    }
  };
});
//# sourceMappingURL=a1292779e6bbfc0fa9a6ea5470077861bc896912.js.map