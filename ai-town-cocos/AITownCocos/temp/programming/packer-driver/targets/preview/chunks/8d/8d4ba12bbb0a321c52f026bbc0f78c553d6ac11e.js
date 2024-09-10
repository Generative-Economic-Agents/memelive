System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req3 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req4 = _unresolved_7.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = require('./_an-object');

        var dPs = require('./_object-dps');

        var enumBugKeys = require('./_enum-bug-keys');

        var IE_PROTO = require('./_shared-key')('IE_PROTO');

        var Empty = function Empty() {
          /* empty */
        };

        var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

        var _createDict = function createDict() {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = require('./_dom-create')('iframe');

          var i = enumBugKeys.length;
          var lt = '<';
          var gt = '>';
          var iframeDocument;
          iframe.style.display = 'none';

          require('./_html').appendChild(iframe);

          iframe.src = 'javascript:'; // eslint-disable-line no-script-url
          // createDict = iframe.contentWindow.Object;
          // html.removeChild(iframe);

          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
          iframeDocument.close();
          _createDict = iframeDocument.F;

          while (i--) delete _createDict[PROTOTYPE][enumBugKeys[i]];

          return _createDict();
        };

        module.exports = Object.create || function create(O, Properties) {
          var result;

          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

            result[IE_PROTO] = O;
          } else result = _createDict();

          return Properties === undefined ? result : dPs(result, Properties);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_an-object': _req,
        './_object-dps': _req0,
        './_enum-bug-keys': _req1,
        './_shared-key': _req2,
        './_dom-create': _req3,
        './_html': _req4
      }));
    }
  };
});
//# sourceMappingURL=8d4ba12bbb0a321c52f026bbc0f78c553d6ac11e.js.map