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
//# sourceMappingURL=78833fda80f674ec2fe37d2f00dd4b94a7477b39.js.map