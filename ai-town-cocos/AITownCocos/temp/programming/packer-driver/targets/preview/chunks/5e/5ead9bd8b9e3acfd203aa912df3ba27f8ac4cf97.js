System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseUpdate, castFunction;

  /**
   * This method is like `_.update` except that it accepts `customizer` which is
   * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
   * path creation is handled by the method instead. The `customizer` is invoked
   * with three arguments: (nsValue, key, nsObject).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.6.0
   * @category Object
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {Function} updater The function to produce the updated value.
   * @param {Function} [customizer] The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = {};
   *
   * _.updateWith(object, '[0][1]', _.constant('a'), Object);
   * // => { '0': { '1': 'a' } }
   */
  function updateWith(object, path, updater, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
  }

  return {
    setters: [function (_unresolved_) {
      baseUpdate = _unresolved_.default;
    }, function (_unresolved_2) {
      castFunction = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", updateWith);
    }
  };
});
//# sourceMappingURL=5ead9bd8b9e3acfd203aa912df3ba27f8ac4cf97.js.map