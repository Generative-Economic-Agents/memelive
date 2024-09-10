System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var hashClear, hashDelete, hashGet, hashHas, hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `Hash`.


  return {
    setters: [function (_unresolved_) {
      hashClear = _unresolved_.default;
    }, function (_unresolved_2) {
      hashDelete = _unresolved_2.default;
    }, function (_unresolved_3) {
      hashGet = _unresolved_3.default;
    }, function (_unresolved_4) {
      hashHas = _unresolved_4.default;
    }, function (_unresolved_5) {
      hashSet = _unresolved_5.default;
    }],
    execute: function () {
      Hash.prototype.clear = hashClear;
      Hash.prototype['delete'] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;

      _export("default", Hash);
    }
  };
});
//# sourceMappingURL=c2630a0c044f4ab61c8316d8812a3843b1373210.js.map