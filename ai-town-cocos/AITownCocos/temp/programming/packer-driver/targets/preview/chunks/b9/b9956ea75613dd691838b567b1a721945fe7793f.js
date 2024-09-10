System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var Symbol, symbolProto, symbolValueOf;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  return {
    setters: [function (_unresolved_) {
      Symbol = _unresolved_.default;
    }],
    execute: function () {
      /** Used to convert symbols to primitives and strings. */
      symbolProto = Symbol ? Symbol.prototype : undefined;
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

      _export("default", cloneSymbol);
    }
  };
});
//# sourceMappingURL=b9956ea75613dd691838b567b1a721945fe7793f.js.map