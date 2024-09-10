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
//# sourceMappingURL=ced4b1493d8c17b7f1eaa0e3bf79f214bf6518d7.js.map