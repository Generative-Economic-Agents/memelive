System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var assignMergeValue, cloneBuffer, cloneTypedArray, copyArray, initCloneObject, isArguments, isArray, isArrayLikeObject, isBuffer, isFunction, isObject, isPlainObject, isTypedArray, safeGet, toPlainObject;

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key),
        srcValue = safeGet(source, key),
        stacked = stack.get(srcValue);

    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }

    var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = isArray(srcValue),
          isBuff = !isArr && isBuffer(srcValue),
          isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;

      if (isArr || isBuff || isTyped) {
        if (isArray(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;

        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }

    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }

    assignMergeValue(object, key, newValue);
  }

  return {
    setters: [function (_unresolved_) {
      assignMergeValue = _unresolved_.default;
    }, function (_unresolved_2) {
      cloneBuffer = _unresolved_2.default;
    }, function (_unresolved_3) {
      cloneTypedArray = _unresolved_3.default;
    }, function (_unresolved_4) {
      copyArray = _unresolved_4.default;
    }, function (_unresolved_5) {
      initCloneObject = _unresolved_5.default;
    }, function (_unresolved_6) {
      isArguments = _unresolved_6.default;
    }, function (_unresolved_7) {
      isArray = _unresolved_7.default;
    }, function (_unresolved_8) {
      isArrayLikeObject = _unresolved_8.default;
    }, function (_unresolved_9) {
      isBuffer = _unresolved_9.default;
    }, function (_unresolved_10) {
      isFunction = _unresolved_10.default;
    }, function (_unresolved_11) {
      isObject = _unresolved_11.default;
    }, function (_unresolved_12) {
      isPlainObject = _unresolved_12.default;
    }, function (_unresolved_13) {
      isTypedArray = _unresolved_13.default;
    }, function (_unresolved_14) {
      safeGet = _unresolved_14.default;
    }, function (_unresolved_15) {
      toPlainObject = _unresolved_15.default;
    }],
    execute: function () {
      _export("default", baseMergeDeep);
    }
  };
});
//# sourceMappingURL=916a96be69f0d32b1169618e9fe2aad051783d88.js.map