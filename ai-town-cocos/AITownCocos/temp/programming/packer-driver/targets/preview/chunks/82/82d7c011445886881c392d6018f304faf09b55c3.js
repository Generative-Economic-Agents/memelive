System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseConformsTo, keys;

  /**
   * The base implementation of `_.conforms` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property predicates to conform to.
   * @returns {Function} Returns the new spec function.
   */
  function baseConforms(source) {
    var props = keys(source);
    return function (object) {
      return baseConformsTo(object, source, props);
    };
  }

  return {
    setters: [function (_unresolved_) {
      baseConformsTo = _unresolved_.default;
    }, function (_unresolved_2) {
      keys = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseConforms);
    }
  };
});
//# sourceMappingURL=82d7c011445886881c392d6018f304faf09b55c3.js.map