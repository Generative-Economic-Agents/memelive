System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var castPath, last, parent, toKey;

  /**
   * The base implementation of `_.unset`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The property path to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   */
  function baseUnset(object, path) {
    path = castPath(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey(last(path))];
  }

  return {
    setters: [function (_unresolved_) {
      castPath = _unresolved_.default;
    }, function (_unresolved_2) {
      last = _unresolved_2.default;
    }, function (_unresolved_3) {
      parent = _unresolved_3.default;
    }, function (_unresolved_4) {
      toKey = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", baseUnset);
    }
  };
});
//# sourceMappingURL=c54c5f78e9d3da6b2dd76999118531b08abcb8a6.js.map