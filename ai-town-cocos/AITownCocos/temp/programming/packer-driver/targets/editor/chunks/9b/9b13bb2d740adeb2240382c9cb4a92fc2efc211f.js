System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isObject, objectCreate, baseCreate;
  return {
    setters: [function (_unresolved_) {
      isObject = _unresolved_.default;
    }],
    execute: function () {
      /** Built-in value references. */
      objectCreate = Object.create;
      /**
       * The base implementation of `_.create` without support for assigning
       * properties to the created object.
       *
       * @private
       * @param {Object} proto The object to inherit from.
       * @returns {Object} Returns the new object.
       */

      baseCreate = function () {
        function object() {}

        return function (proto) {
          if (!isObject(proto)) {
            return {};
          }

          if (objectCreate) {
            return objectCreate(proto);
          }

          object.prototype = proto;
          var result = new object();
          object.prototype = undefined;
          return result;
        };
      }();

      _export("default", baseCreate);
    }
  };
});
//# sourceMappingURL=9b13bb2d740adeb2240382c9cb4a92fc2efc211f.js.map