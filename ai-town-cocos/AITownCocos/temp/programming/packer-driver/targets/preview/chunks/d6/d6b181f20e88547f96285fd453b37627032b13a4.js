System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var Stack, assignMergeValue, baseFor, baseMergeDeep, isObject, keysIn, safeGet;

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }

    baseFor(source, function (srcValue, key) {
      stack || (stack = new Stack());

      if (isObject(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }

        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }

  return {
    setters: [function (_unresolved_) {
      Stack = _unresolved_.default;
    }, function (_unresolved_2) {
      assignMergeValue = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseFor = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseMergeDeep = _unresolved_4.default;
    }, function (_unresolved_5) {
      isObject = _unresolved_5.default;
    }, function (_unresolved_6) {
      keysIn = _unresolved_6.default;
    }, function (_unresolved_7) {
      safeGet = _unresolved_7.default;
    }],
    execute: function () {
      _export("default", baseMerge);
    }
  };
});
//# sourceMappingURL=d6b181f20e88547f96285fd453b37627032b13a4.js.map