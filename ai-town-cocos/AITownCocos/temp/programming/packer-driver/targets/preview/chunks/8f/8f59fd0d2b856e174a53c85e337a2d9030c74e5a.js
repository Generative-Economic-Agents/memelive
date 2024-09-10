System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21"], function (_export, _context) {
  "use strict";

  var Stack, arrayEach, assignValue, baseAssign, baseAssignIn, cloneBuffer, copyArray, copySymbols, copySymbolsIn, getAllKeys, getAllKeysIn, getTag, initCloneArray, initCloneByTag, initCloneObject, isArray, isBuffer, isMap, isObject, isSet, keys, keysIn, CLONE_DEEP_FLAG, CLONE_FLAT_FLAG, CLONE_SYMBOLS_FLAG, argsTag, arrayTag, boolTag, dateTag, errorTag, funcTag, genTag, mapTag, numberTag, objectTag, regexpTag, setTag, stringTag, symbolTag, weakMapTag, arrayBufferTag, dataViewTag, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, cloneableTags;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }

    if (result !== undefined) {
      return result;
    }

    if (!isObject(value)) {
      return value;
    }

    var isArr = isArray(value);

    if (isArr) {
      result = initCloneArray(value);

      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
          isFunc = tag == funcTag || tag == genTag;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }

      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject(value);

        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }

        result = initCloneByTag(value, tag, isDeep);
      }
    } // Check for circular references and return its corresponding clone.


    stack || (stack = new Stack());
    var stacked = stack.get(value);

    if (stacked) {
      return stacked;
    }

    stack.set(value, result);

    if (isSet(value)) {
      value.forEach(function (subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function (subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function (subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      } // Recursively populate clone (susceptible to call stack limits).


      assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  return {
    setters: [function (_unresolved_) {
      Stack = _unresolved_.default;
    }, function (_unresolved_2) {
      arrayEach = _unresolved_2.default;
    }, function (_unresolved_3) {
      assignValue = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseAssign = _unresolved_4.default;
    }, function (_unresolved_5) {
      baseAssignIn = _unresolved_5.default;
    }, function (_unresolved_6) {
      cloneBuffer = _unresolved_6.default;
    }, function (_unresolved_7) {
      copyArray = _unresolved_7.default;
    }, function (_unresolved_8) {
      copySymbols = _unresolved_8.default;
    }, function (_unresolved_9) {
      copySymbolsIn = _unresolved_9.default;
    }, function (_unresolved_10) {
      getAllKeys = _unresolved_10.default;
    }, function (_unresolved_11) {
      getAllKeysIn = _unresolved_11.default;
    }, function (_unresolved_12) {
      getTag = _unresolved_12.default;
    }, function (_unresolved_13) {
      initCloneArray = _unresolved_13.default;
    }, function (_unresolved_14) {
      initCloneByTag = _unresolved_14.default;
    }, function (_unresolved_15) {
      initCloneObject = _unresolved_15.default;
    }, function (_unresolved_16) {
      isArray = _unresolved_16.default;
    }, function (_unresolved_17) {
      isBuffer = _unresolved_17.default;
    }, function (_unresolved_18) {
      isMap = _unresolved_18.default;
    }, function (_unresolved_19) {
      isObject = _unresolved_19.default;
    }, function (_unresolved_20) {
      isSet = _unresolved_20.default;
    }, function (_unresolved_21) {
      keys = _unresolved_21.default;
    }, function (_unresolved_22) {
      keysIn = _unresolved_22.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for cloning. */
      CLONE_DEEP_FLAG = 1;
      CLONE_FLAT_FLAG = 2;
      CLONE_SYMBOLS_FLAG = 4;
      /** `Object#toString` result references. */

      argsTag = '[object Arguments]';
      arrayTag = '[object Array]';
      boolTag = '[object Boolean]';
      dateTag = '[object Date]';
      errorTag = '[object Error]';
      funcTag = '[object Function]';
      genTag = '[object GeneratorFunction]';
      mapTag = '[object Map]';
      numberTag = '[object Number]';
      objectTag = '[object Object]';
      regexpTag = '[object RegExp]';
      setTag = '[object Set]';
      stringTag = '[object String]';
      symbolTag = '[object Symbol]';
      weakMapTag = '[object WeakMap]';
      arrayBufferTag = '[object ArrayBuffer]';
      dataViewTag = '[object DataView]';
      float32Tag = '[object Float32Array]';
      float64Tag = '[object Float64Array]';
      int8Tag = '[object Int8Array]';
      int16Tag = '[object Int16Array]';
      int32Tag = '[object Int32Array]';
      uint8Tag = '[object Uint8Array]';
      uint8ClampedTag = '[object Uint8ClampedArray]';
      uint16Tag = '[object Uint16Array]';
      uint32Tag = '[object Uint32Array]';
      /** Used to identify `toStringTag` values supported by `_.clone`. */

      cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

      _export("default", baseClone);
    }
  };
});
//# sourceMappingURL=8f59fd0d2b856e174a53c85e337a2d9030c74e5a.js.map