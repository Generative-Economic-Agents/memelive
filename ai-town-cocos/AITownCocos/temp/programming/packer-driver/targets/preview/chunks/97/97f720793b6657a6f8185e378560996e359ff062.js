System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        module.exports = function (data, opts) {
          if (!opts) opts = {};
          if (typeof opts === 'function') opts = {
            cmp: opts
          };
          var cycles = typeof opts.cycles === 'boolean' ? opts.cycles : false;

          var cmp = opts.cmp && function (f) {
            return function (node) {
              return function (a, b) {
                var aobj = {
                  key: a,
                  value: node[a]
                };
                var bobj = {
                  key: b,
                  value: node[b]
                };
                return f(aobj, bobj);
              };
            };
          }(opts.cmp);

          var seen = [];
          return function stringify(node) {
            if (node && node.toJSON && typeof node.toJSON === 'function') {
              node = node.toJSON();
            }

            if (node === undefined) return;
            if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
            if (typeof node !== 'object') return JSON.stringify(node);
            var i, out;

            if (Array.isArray(node)) {
              out = '[';

              for (i = 0; i < node.length; i++) {
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
              }

              return out + ']';
            }

            if (node === null) return 'null';

            if (seen.indexOf(node) !== -1) {
              if (cycles) return JSON.stringify('__cycle__');
              throw new TypeError('Converting circular structure to JSON');
            }

            var seenIndex = seen.push(node) - 1;
            var keys = Object.keys(node).sort(cmp && cmp(node));
            out = '';

            for (i = 0; i < keys.length; i++) {
              var key = keys[i];
              var value = stringify(node[key]);
              if (!value) continue;
              if (out) out += ',';
              out += JSON.stringify(key) + ':' + value;
            }

            seen.splice(seenIndex, 1);
            return '{' + out + '}';
          }(data);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=97f720793b6657a6f8185e378560996e359ff062.js.map