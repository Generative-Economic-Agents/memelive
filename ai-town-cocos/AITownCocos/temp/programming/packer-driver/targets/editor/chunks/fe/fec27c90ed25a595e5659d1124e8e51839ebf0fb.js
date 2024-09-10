System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var $at = require('./_string-at')(true); // 21.1.3.27 String.prototype[@@iterator]()


        require('./_iter-define')(String, 'String', function (iterated) {
          this._t = String(iterated); // target

          this._i = 0; // next index
          // 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function () {
          var O = this._t;
          var index = this._i;
          var point;
          if (index >= O.length) return {
            value: undefined,
            done: true
          };
          point = $at(O, index);
          this._i += point.length;
          return {
            value: point,
            done: false
          };
        }); // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_string-at': _req,
        './_iter-define': _req0
      }));
    }
  };
});
//# sourceMappingURL=fec27c90ed25a595e5659d1124e8e51839ebf0fb.js.map