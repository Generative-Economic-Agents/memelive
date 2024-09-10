System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var assignValue, baseAssignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }

      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }

    return object;
  }

  return {
    setters: [function (_unresolved_) {
      assignValue = _unresolved_.default;
    }, function (_unresolved_2) {
      baseAssignValue = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", copyObject);
    }
  };
});
//# sourceMappingURL=9df695109feb2056384e4c0e660ca801f62dbd33.js.map