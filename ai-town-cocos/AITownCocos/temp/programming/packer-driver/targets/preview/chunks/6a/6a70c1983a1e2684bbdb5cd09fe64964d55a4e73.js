System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
      defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  return {
    setters: [function (_unresolved_) {
      defineProperty = _unresolved_.default;
    }],
    execute: function () {
      _export("default", baseAssignValue);
    }
  };
});
//# sourceMappingURL=6a70c1983a1e2684bbdb5cd09fe64964d55a4e73.js.map