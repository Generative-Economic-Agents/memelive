System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseConformsTo, keys;

  /**
   * Checks if `object` conforms to `source` by invoking the predicate
   * properties of `source` with the corresponding property values of `object`.
   *
   * **Note:** This method is equivalent to `_.conforms` when `source` is
   * partially applied.
   *
   * @static
   * @memberOf _
   * @since 4.14.0
   * @category Lang
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property predicates to conform to.
   * @returns {boolean} Returns `true` if `object` conforms, else `false`.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   *
   * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
   * // => true
   *
   * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
   * // => false
   */
  function conformsTo(object, source) {
    return source == null || baseConformsTo(object, source, keys(source));
  }

  return {
    setters: [function (_unresolved_) {
      baseConformsTo = _unresolved_.default;
    }, function (_unresolved_2) {
      keys = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", conformsTo);
    }
  };
});
//# sourceMappingURL=cb14d5e376a7ab9602d0985ec4f5a16bba012b09.js.map