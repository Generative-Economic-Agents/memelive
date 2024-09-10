System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var ListCache, stackClear, stackDelete, stackGet, stackHas, stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  } // Add methods to `Stack`.


  return {
    setters: [function (_unresolved_) {
      ListCache = _unresolved_.default;
    }, function (_unresolved_2) {
      stackClear = _unresolved_2.default;
    }, function (_unresolved_3) {
      stackDelete = _unresolved_3.default;
    }, function (_unresolved_4) {
      stackGet = _unresolved_4.default;
    }, function (_unresolved_5) {
      stackHas = _unresolved_5.default;
    }, function (_unresolved_6) {
      stackSet = _unresolved_6.default;
    }],
    execute: function () {
      Stack.prototype.clear = stackClear;
      Stack.prototype['delete'] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;

      _export("default", Stack);
    }
  };
});
//# sourceMappingURL=401bd8c1ef54af77d9724d50ab3ecea15ac3ecba.js.map