System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var Symbol, copyArray, getTag, isArrayLike, isString, iteratorToArray, mapToArray, setToArray, stringToArray, values, mapTag, setTag, symIterator;

  /**
   * Converts `value` to an array.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Array} Returns the converted array.
   * @example
   *
   * _.toArray({ 'a': 1, 'b': 2 });
   * // => [1, 2]
   *
   * _.toArray('abc');
   * // => ['a', 'b', 'c']
   *
   * _.toArray(1);
   * // => []
   *
   * _.toArray(null);
   * // => []
   */
  function toArray(value) {
    if (!value) {
      return [];
    }

    if (isArrayLike(value)) {
      return isString(value) ? stringToArray(value) : copyArray(value);
    }

    if (symIterator && value[symIterator]) {
      return iteratorToArray(value[symIterator]());
    }

    var tag = getTag(value),
        func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
    return func(value);
  }

  return {
    setters: [function (_unresolved_) {
      Symbol = _unresolved_.default;
    }, function (_unresolved_2) {
      copyArray = _unresolved_2.default;
    }, function (_unresolved_3) {
      getTag = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArrayLike = _unresolved_4.default;
    }, function (_unresolved_5) {
      isString = _unresolved_5.default;
    }, function (_unresolved_6) {
      iteratorToArray = _unresolved_6.default;
    }, function (_unresolved_7) {
      mapToArray = _unresolved_7.default;
    }, function (_unresolved_8) {
      setToArray = _unresolved_8.default;
    }, function (_unresolved_9) {
      stringToArray = _unresolved_9.default;
    }, function (_unresolved_10) {
      values = _unresolved_10.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      mapTag = '[object Map]';
      setTag = '[object Set]';
      /** Built-in value references. */

      symIterator = Symbol ? Symbol.iterator : undefined;

      _export("default", toArray);
    }
  };
});
//# sourceMappingURL=5f78c8f5f10aa981856e245c5b46b7ae7f6d8cf3.js.map