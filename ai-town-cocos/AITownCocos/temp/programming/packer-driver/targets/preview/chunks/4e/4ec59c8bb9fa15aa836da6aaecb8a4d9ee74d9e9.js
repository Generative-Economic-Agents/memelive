System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseSet;

  /**
   * This method is like `_.set` except that it accepts `customizer` which is
   * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
   * path creation is handled by the method instead. The `customizer` is invoked
   * with three arguments: (nsValue, key, nsObject).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @param {Function} [customizer] The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = {};
   *
   * _.setWith(object, '[0][1]', 'a', Object);
   * // => { '0': { '1': 'a' } }
   */
  function setWith(object, path, value, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return object == null ? object : baseSet(object, path, value, customizer);
  }

  return {
    setters: [function (_unresolved_) {
      baseSet = _unresolved_.default;
    }],
    execute: function () {
      _export("default", setWith);
    }
  };
});
//# sourceMappingURL=4ec59c8bb9fa15aa836da6aaecb8a4d9ee74d9e9.js.map