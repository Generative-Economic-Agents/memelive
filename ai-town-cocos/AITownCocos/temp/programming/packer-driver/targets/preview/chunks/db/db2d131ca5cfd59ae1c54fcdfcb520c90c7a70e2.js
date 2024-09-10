System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseCreate, baseLodash;

  /**
   * The base constructor for creating `lodash` wrapper objects.
   *
   * @private
   * @param {*} value The value to wrap.
   * @param {boolean} [chainAll] Enable explicit method chain sequences.
   */
  function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
  }

  return {
    setters: [function (_unresolved_) {
      baseCreate = _unresolved_.default;
    }, function (_unresolved_2) {
      baseLodash = _unresolved_2.default;
    }],
    execute: function () {
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;

      _export("default", LodashWrapper);
    }
  };
});
//# sourceMappingURL=db2d131ca5cfd59ae1c54fcdfcb520c90c7a70e2.js.map