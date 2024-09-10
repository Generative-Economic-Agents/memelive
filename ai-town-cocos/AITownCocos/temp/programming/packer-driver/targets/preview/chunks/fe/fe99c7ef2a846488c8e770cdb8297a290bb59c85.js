System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var baseKeys, getTag, isArguments, isArray, isArrayLike, isBuffer, isPrototype, isTypedArray, mapTag, setTag, objectProto, hasOwnProperty;

  /**
   * Checks if `value` is an empty object, collection, map, or set.
   *
   * Objects are considered empty if they have no own enumerable string keyed
   * properties.
   *
   * Array-like values such as `arguments` objects, arrays, buffers, strings, or
   * jQuery-like collections are considered empty if they have a `length` of `0`.
   * Similarly, maps and sets are considered empty if they have a `size` of `0`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */
  function isEmpty(value) {
    if (value == null) {
      return true;
    }

    if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
      return !value.length;
    }

    var tag = getTag(value);

    if (tag == mapTag || tag == setTag) {
      return !value.size;
    }

    if (isPrototype(value)) {
      return !baseKeys(value).length;
    }

    for (var key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }

    return true;
  }

  return {
    setters: [function (_unresolved_) {
      baseKeys = _unresolved_.default;
    }, function (_unresolved_2) {
      getTag = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArguments = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArray = _unresolved_4.default;
    }, function (_unresolved_5) {
      isArrayLike = _unresolved_5.default;
    }, function (_unresolved_6) {
      isBuffer = _unresolved_6.default;
    }, function (_unresolved_7) {
      isPrototype = _unresolved_7.default;
    }, function (_unresolved_8) {
      isTypedArray = _unresolved_8.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      mapTag = '[object Map]';
      setTag = '[object Set]';
      /** Used for built-in method references. */

      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;

      _export("default", isEmpty);
    }
  };
});
//# sourceMappingURL=fe99c7ef2a846488c8e770cdb8297a290bb59c85.js.map