System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var arrayFilter, isFunction;

  /**
   * The base implementation of `_.functions` which creates an array of
   * `object` function property names filtered from `props`.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Array} props The property names to filter.
   * @returns {Array} Returns the function names.
   */
  function baseFunctions(object, props) {
    return arrayFilter(props, function (key) {
      return isFunction(object[key]);
    });
  }

  return {
    setters: [function (_unresolved_) {
      arrayFilter = _unresolved_.default;
    }, function (_unresolved_2) {
      isFunction = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseFunctions);
    }
  };
});
//# sourceMappingURL=592a828a50a792e85839573a6c8912ab7d5999c7.js.map