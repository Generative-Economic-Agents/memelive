System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var arrayMap;

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function (key) {
      return object[key];
    });
  }

  return {
    setters: [function (_unresolved_) {
      arrayMap = _unresolved_.default;
    }],
    execute: function () {
      _export("default", baseValues);
    }
  };
});
//# sourceMappingURL=0961212338742080ea07a9715d6899c8dbc71d44.js.map