System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.conformsTo` which accepts `props` to check.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property predicates to conform to.
   * @returns {boolean} Returns `true` if `object` conforms, else `false`.
   */
  function baseConformsTo(object, source, props) {
    var length = props.length;

    if (object == null) {
      return !length;
    }

    object = Object(object);

    while (length--) {
      var key = props[length],
          predicate = source[key],
          value = object[key];

      if (value === undefined && !(key in object) || !predicate(value)) {
        return false;
      }
    }

    return true;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseConformsTo);
    }
  };
});
//# sourceMappingURL=690e9fafa13e8f1b7c8c100ab93cee36e9dbdca3.js.map