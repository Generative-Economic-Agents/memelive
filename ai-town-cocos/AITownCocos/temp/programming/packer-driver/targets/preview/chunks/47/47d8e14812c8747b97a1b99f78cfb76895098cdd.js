System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var arrayPush, getPrototype, getSymbols, stubArray, nativeGetSymbols, getSymbolsIn;
  return {
    setters: [function (_unresolved_) {
      arrayPush = _unresolved_.default;
    }, function (_unresolved_2) {
      getPrototype = _unresolved_2.default;
    }, function (_unresolved_3) {
      getSymbols = _unresolved_3.default;
    }, function (_unresolved_4) {
      stubArray = _unresolved_4.default;
    }],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeGetSymbols = Object.getOwnPropertySymbols;
      /**
       * Creates an array of the own and inherited enumerable symbols of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of symbols.
       */

      getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
        var result = [];

        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }

        return result;
      };

      _export("default", getSymbolsIn);
    }
  };
});
//# sourceMappingURL=47d8e14812c8747b97a1b99f78cfb76895098cdd.js.map