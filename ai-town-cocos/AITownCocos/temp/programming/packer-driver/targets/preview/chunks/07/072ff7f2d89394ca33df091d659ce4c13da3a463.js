System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseGet;

  /**
   * The opposite of `_.property`; this method creates a function that returns
   * the value at a given path of `object`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Util
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var array = [0, 1, 2],
   *     object = { 'a': array, 'b': array, 'c': array };
   *
   * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
   * // => [2, 0]
   *
   * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
   * // => [2, 0]
   */
  function propertyOf(object) {
    return function (path) {
      return object == null ? undefined : baseGet(object, path);
    };
  }

  return {
    setters: [function (_unresolved_) {
      baseGet = _unresolved_.default;
    }],
    execute: function () {
      _export("default", propertyOf);
    }
  };
});
//# sourceMappingURL=072ff7f2d89394ca33df091d659ce4c13da3a463.js.map