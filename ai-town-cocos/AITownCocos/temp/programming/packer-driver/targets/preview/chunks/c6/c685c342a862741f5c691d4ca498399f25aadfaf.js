System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var Symbol, Uint8Array, eq, equalArrays, mapToArray, setToArray, COMPARE_PARTIAL_FLAG, COMPARE_UNORDERED_FLAG, boolTag, dateTag, errorTag, mapTag, numberTag, regexpTag, setTag, stringTag, symbolTag, arrayBufferTag, dataViewTag, symbolProto, symbolValueOf;

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }

        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }

        return true;

      case boolTag:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);

      case errorTag:
        return object.name == other.name && object.message == other.message;

      case regexpTag:
      case stringTag:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == other + '';

      case mapTag:
        var convert = mapToArray;

      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert || (convert = setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        } // Assume cyclic values are equal.


        var stacked = stack.get(object);

        if (stacked) {
          return stacked == other;
        }

        bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }

    }

    return false;
  }

  return {
    setters: [function (_unresolved_) {
      Symbol = _unresolved_.default;
    }, function (_unresolved_2) {
      Uint8Array = _unresolved_2.default;
    }, function (_unresolved_3) {
      eq = _unresolved_3.default;
    }, function (_unresolved_4) {
      equalArrays = _unresolved_4.default;
    }, function (_unresolved_5) {
      mapToArray = _unresolved_5.default;
    }, function (_unresolved_6) {
      setToArray = _unresolved_6.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for value comparisons. */
      COMPARE_PARTIAL_FLAG = 1;
      COMPARE_UNORDERED_FLAG = 2;
      /** `Object#toString` result references. */

      boolTag = '[object Boolean]';
      dateTag = '[object Date]';
      errorTag = '[object Error]';
      mapTag = '[object Map]';
      numberTag = '[object Number]';
      regexpTag = '[object RegExp]';
      setTag = '[object Set]';
      stringTag = '[object String]';
      symbolTag = '[object Symbol]';
      arrayBufferTag = '[object ArrayBuffer]';
      dataViewTag = '[object DataView]';
      /** Used to convert symbols to primitives and strings. */

      symbolProto = Symbol ? Symbol.prototype : undefined;
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

      _export("default", equalByTag);
    }
  };
});
//# sourceMappingURL=c685c342a862741f5c691d4ca498399f25aadfaf.js.map