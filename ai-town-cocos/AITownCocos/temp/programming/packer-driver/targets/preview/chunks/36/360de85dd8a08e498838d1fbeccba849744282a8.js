System.register([], function (_export, _context) {
  "use strict";

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];

    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", nativeKeysIn);
    }
  };
});
//# sourceMappingURL=360de85dd8a08e498838d1fbeccba849744282a8.js.map