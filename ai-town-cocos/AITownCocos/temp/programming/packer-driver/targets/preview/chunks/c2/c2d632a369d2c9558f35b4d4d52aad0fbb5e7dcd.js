System.register([], function (_export, _context) {
  "use strict";

  /**
   * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
   *
   * @private
   * @param {Array} props The property identifiers.
   * @param {Array} values The property values.
   * @param {Function} assignFunc The function to assign values.
   * @returns {Object} Returns the new object.
   */
  function baseZipObject(props, values, assignFunc) {
    var index = -1,
        length = props.length,
        valsLength = values.length,
        result = {};

    while (++index < length) {
      var value = index < valsLength ? values[index] : undefined;
      assignFunc(result, props[index], value);
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseZipObject);
    }
  };
});
//# sourceMappingURL=c2d632a369d2c9558f35b4d4d52aad0fbb5e7dcd.js.map