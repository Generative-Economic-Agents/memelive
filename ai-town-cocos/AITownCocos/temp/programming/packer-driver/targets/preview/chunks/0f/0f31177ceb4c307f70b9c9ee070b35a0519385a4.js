System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseGetTag, isLength, isObjectLike, argsTag, arrayTag, boolTag, dateTag, errorTag, funcTag, mapTag, numberTag, objectTag, regexpTag, setTag, stringTag, weakMapTag, arrayBufferTag, dataViewTag, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, typedArrayTags;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  return {
    setters: [function (_unresolved_) {
      baseGetTag = _unresolved_.default;
    }, function (_unresolved_2) {
      isLength = _unresolved_2.default;
    }, function (_unresolved_3) {
      isObjectLike = _unresolved_3.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      argsTag = '[object Arguments]';
      arrayTag = '[object Array]';
      boolTag = '[object Boolean]';
      dateTag = '[object Date]';
      errorTag = '[object Error]';
      funcTag = '[object Function]';
      mapTag = '[object Map]';
      numberTag = '[object Number]';
      objectTag = '[object Object]';
      regexpTag = '[object RegExp]';
      setTag = '[object Set]';
      stringTag = '[object String]';
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
      /** Used to identify `toStringTag` values of typed arrays. */

      typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

      _export("default", baseIsTypedArray);
    }
  };
});
//# sourceMappingURL=0f31177ceb4c307f70b9c9ee070b35a0519385a4.js.map