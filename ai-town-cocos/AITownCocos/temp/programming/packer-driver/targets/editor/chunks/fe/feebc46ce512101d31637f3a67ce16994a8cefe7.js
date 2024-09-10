System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var arrayMap;

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function (key) {
      return [key, object[key]];
    });
  }

  return {
    setters: [function (_unresolved_) {
      arrayMap = _unresolved_.default;
    }],
    execute: function () {
      _export("default", baseToPairs);
    }
  };
});
//# sourceMappingURL=feebc46ce512101d31637f3a67ce16994a8cefe7.js.map