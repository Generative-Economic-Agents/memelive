System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var apply, castPath, last, parent, toKey;

  /**
   * The base implementation of `_.invoke` without support for individual
   * method arguments.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the method to invoke.
   * @param {Array} args The arguments to invoke the method with.
   * @returns {*} Returns the result of the invoked method.
   */
  function baseInvoke(object, path, args) {
    path = castPath(path, object);
    object = parent(object, path);
    var func = object == null ? object : object[toKey(last(path))];
    return func == null ? undefined : apply(func, object, args);
  }

  return {
    setters: [function (_unresolved_) {
      apply = _unresolved_.default;
    }, function (_unresolved_2) {
      castPath = _unresolved_2.default;
    }, function (_unresolved_3) {
      last = _unresolved_3.default;
    }, function (_unresolved_4) {
      parent = _unresolved_4.default;
    }, function (_unresolved_5) {
      toKey = _unresolved_5.default;
    }],
    execute: function () {
      _export("default", baseInvoke);
    }
  };
});
//# sourceMappingURL=e966664f499e5ea6d579f0e627788ac7a4e2b6c9.js.map