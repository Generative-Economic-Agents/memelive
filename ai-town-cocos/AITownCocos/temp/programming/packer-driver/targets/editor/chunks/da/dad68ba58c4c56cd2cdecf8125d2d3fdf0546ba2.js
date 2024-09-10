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
        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = require('./_cof');

        var TAG = require('./_wks')('toStringTag'); // ES3 wrong here


        var ARG = cof(function () {
          return arguments;
        }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

        var tryGet = function (it, key) {
          try {
            return it[key];
          } catch (e) {
            /* empty */
          }
        };

        module.exports = function (it) {
          var O, T, B;
          return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
          : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
          : ARG ? cof(O) // ES3 arguments fallback
          : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_cof': _req,
        './_wks': _req0
      }));
    }
  };
});
//# sourceMappingURL=dad68ba58c4c56cd2cdecf8125d2d3fdf0546ba2.js.map