System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var assignValue, baseZipObject;

  /**
   * This method is like `_.fromPairs` except that it accepts two arrays,
   * one of property identifiers and one of corresponding values.
   *
   * @static
   * @memberOf _
   * @since 0.4.0
   * @category Array
   * @param {Array} [props=[]] The property identifiers.
   * @param {Array} [values=[]] The property values.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.zipObject(['a', 'b'], [1, 2]);
   * // => { 'a': 1, 'b': 2 }
   */
  function zipObject(props, values) {
    return baseZipObject(props || [], values || [], assignValue);
  }

  return {
    setters: [function (_unresolved_) {
      assignValue = _unresolved_.default;
    }, function (_unresolved_2) {
      baseZipObject = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", zipObject);
    }
  };
});
//# sourceMappingURL=f116472d2b91a25556d3902535b7f04fa086fa9a.js.map