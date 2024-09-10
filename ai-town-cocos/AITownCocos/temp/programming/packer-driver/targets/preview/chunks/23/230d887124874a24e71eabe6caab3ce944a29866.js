System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var Stack, equalArrays, equalByTag, equalObjects, getTag, isArray, isBuffer, isTypedArray, COMPARE_PARTIAL_FLAG, argsTag, arrayTag, objectTag, objectProto, hasOwnProperty;

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = objIsArr ? arrayTag : getTag(object),
        othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }

      objIsArr = true;
      objIsObj = false;
    }

    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }

    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }

    if (!isSameTag) {
      return false;
    }

    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  return {
    setters: [function (_unresolved_) {
      Stack = _unresolved_.default;
    }, function (_unresolved_2) {
      equalArrays = _unresolved_2.default;
    }, function (_unresolved_3) {
      equalByTag = _unresolved_3.default;
    }, function (_unresolved_4) {
      equalObjects = _unresolved_4.default;
    }, function (_unresolved_5) {
      getTag = _unresolved_5.default;
    }, function (_unresolved_6) {
      isArray = _unresolved_6.default;
    }, function (_unresolved_7) {
      isBuffer = _unresolved_7.default;
    }, function (_unresolved_8) {
      isTypedArray = _unresolved_8.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for value comparisons. */
      COMPARE_PARTIAL_FLAG = 1;
      /** `Object#toString` result references. */

      argsTag = '[object Arguments]';
      arrayTag = '[object Array]';
      objectTag = '[object Object]';
      /** Used for built-in method references. */

      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;

      _export("default", baseIsEqualDeep);
    }
  };
});
//# sourceMappingURL=230d887124874a24e71eabe6caab3ce944a29866.js.map