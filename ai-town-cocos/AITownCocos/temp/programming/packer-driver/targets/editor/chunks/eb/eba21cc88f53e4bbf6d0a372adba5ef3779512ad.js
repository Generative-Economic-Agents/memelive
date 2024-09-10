System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isPlainObject;

  /**
   * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
   * objects.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {string} key The key of the property to inspect.
   * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
   */
  function customOmitClone(value) {
    return isPlainObject(value) ? undefined : value;
  }

  return {
    setters: [function (_unresolved_) {
      isPlainObject = _unresolved_.default;
    }],
    execute: function () {
      _export("default", customOmitClone);
    }
  };
});
//# sourceMappingURL=eba21cc88f53e4bbf6d0a372adba5ef3779512ad.js.map