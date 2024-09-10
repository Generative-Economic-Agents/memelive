System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var arrayFilter, stubArray, objectProto, propertyIsEnumerable, nativeGetSymbols, getSymbols;
  return {
    setters: [function (_unresolved_) {
      arrayFilter = _unresolved_.default;
    }, function (_unresolved_2) {
      stubArray = _unresolved_2.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /** Built-in value references. */

      propertyIsEnumerable = objectProto.propertyIsEnumerable;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      nativeGetSymbols = Object.getOwnPropertySymbols;
      /**
       * Creates an array of the own enumerable symbols of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of symbols.
       */

      getSymbols = !nativeGetSymbols ? stubArray : function (object) {
        if (object == null) {
          return [];
        }

        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function (symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };

      _export("default", getSymbols);
    }
  };
});
//# sourceMappingURL=55aa367e0df32a44ae93718537789bc388fb994c.js.map