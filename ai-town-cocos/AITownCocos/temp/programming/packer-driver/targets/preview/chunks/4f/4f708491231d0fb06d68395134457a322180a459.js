System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseGet, baseSlice;

  /**
   * Gets the parent value at `path` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} path The path to get the parent value of.
   * @returns {*} Returns the parent value.
   */
  function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
  }

  return {
    setters: [function (_unresolved_) {
      baseGet = _unresolved_.default;
    }, function (_unresolved_2) {
      baseSlice = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", parent);
    }
  };
});
//# sourceMappingURL=4f708491231d0fb06d68395134457a322180a459.js.map