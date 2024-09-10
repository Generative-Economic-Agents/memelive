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
//# sourceMappingURL=4131d29973f3481918f280688170517cc92d6669.js.map