System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseSet, baseZipObject;

  /**
   * This method is like `_.zipObject` except that it supports property paths.
   *
   * @static
   * @memberOf _
   * @since 4.1.0
   * @category Array
   * @param {Array} [props=[]] The property identifiers.
   * @param {Array} [values=[]] The property values.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
   * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
   */
  function zipObjectDeep(props, values) {
    return baseZipObject(props || [], values || [], baseSet);
  }

  return {
    setters: [function (_unresolved_) {
      baseSet = _unresolved_.default;
    }, function (_unresolved_2) {
      baseZipObject = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", zipObjectDeep);
    }
  };
});
//# sourceMappingURL=dc30eec50c4f94e1f4db645a17d3043d41ed82bb.js.map