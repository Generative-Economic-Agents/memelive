System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var basePickBy, hasIn;

  /**
   * The base implementation of `_.pick` without support for individual
   * property identifiers.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @returns {Object} Returns the new object.
   */
  function basePick(object, paths) {
    return basePickBy(object, paths, function (value, path) {
      return hasIn(object, path);
    });
  }

  return {
    setters: [function (_unresolved_) {
      basePickBy = _unresolved_.default;
    }, function (_unresolved_2) {
      hasIn = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", basePick);
    }
  };
});
//# sourceMappingURL=b727fc9db1917dc17d13ed773f86e146faff9902.js.map