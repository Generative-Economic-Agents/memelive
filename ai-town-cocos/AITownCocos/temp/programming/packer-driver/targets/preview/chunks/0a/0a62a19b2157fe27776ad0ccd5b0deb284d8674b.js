System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var baseKeys, getTag, isArrayLike, isString, stringSize, mapTag, setTag;

  /**
   * Gets the size of `collection` by returning its length for array-like
   * values or the number of own enumerable string keyed properties for objects.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @returns {number} Returns the collection size.
   * @example
   *
   * _.size([1, 2, 3]);
   * // => 3
   *
   * _.size({ 'a': 1, 'b': 2 });
   * // => 2
   *
   * _.size('pebbles');
   * // => 7
   */
  function size(collection) {
    if (collection == null) {
      return 0;
    }

    if (isArrayLike(collection)) {
      return isString(collection) ? stringSize(collection) : collection.length;
    }

    var tag = getTag(collection);

    if (tag == mapTag || tag == setTag) {
      return collection.size;
    }

    return baseKeys(collection).length;
  }

  return {
    setters: [function (_unresolved_) {
      baseKeys = _unresolved_.default;
    }, function (_unresolved_2) {
      getTag = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArrayLike = _unresolved_3.default;
    }, function (_unresolved_4) {
      isString = _unresolved_4.default;
    }, function (_unresolved_5) {
      stringSize = _unresolved_5.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      mapTag = '[object Map]';
      setTag = '[object Set]';

      _export("default", size);
    }
  };
});
//# sourceMappingURL=0a62a19b2157fe27776ad0ccd5b0deb284d8674b.js.map