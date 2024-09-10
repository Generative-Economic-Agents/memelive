System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var assignValue, castPath, isIndex, isObject, toKey;

  /**
   * The base implementation of `_.set`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @param {Function} [customizer] The function to customize path creation.
   * @returns {Object} Returns `object`.
   */
  function baseSet(object, path, value, customizer) {
    if (!isObject(object)) {
      return object;
    }

    path = castPath(path, object);
    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        nested = object;

    while (nested != null && ++index < length) {
      var key = toKey(path[index]),
          newValue = value;

      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        return object;
      }

      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : undefined;

        if (newValue === undefined) {
          newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
        }
      }

      assignValue(nested, key, newValue);
      nested = nested[key];
    }

    return object;
  }

  return {
    setters: [function (_unresolved_) {
      assignValue = _unresolved_.default;
    }, function (_unresolved_2) {
      castPath = _unresolved_2.default;
    }, function (_unresolved_3) {
      isIndex = _unresolved_3.default;
    }, function (_unresolved_4) {
      isObject = _unresolved_4.default;
    }, function (_unresolved_5) {
      toKey = _unresolved_5.default;
    }],
    execute: function () {
      _export("default", baseSet);
    }
  };
});
//# sourceMappingURL=7367268263fc3b489f2d63083e0066b750587720.js.map