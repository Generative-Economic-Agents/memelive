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
        // Generated by CoffeeScript 1.12.7
        (function () {
          var NodeType,
              XMLNode,
              XMLRaw,
              extend = function extend(child, parent) {
            for (var key in parent) {
              if (hasProp.call(parent, key)) child[key] = parent[key];
            }

            function ctor() {
              this.constructor = child;
            }

            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
          },
              hasProp = {}.hasOwnProperty;

          NodeType = require('./NodeType');
          XMLNode = require('./XMLNode');

          module.exports = XMLRaw = function (superClass) {
            extend(XMLRaw, superClass);

            function XMLRaw(parent, text) {
              XMLRaw.__super__.constructor.call(this, parent);

              if (text == null) {
                throw new Error("Missing raw text. " + this.debugInfo());
              }

              this.type = NodeType.Raw;
              this.value = this.stringify.raw(text);
            }

            XMLRaw.prototype.clone = function () {
              return Object.create(this);
            };

            XMLRaw.prototype.toString = function (options) {
              return this.options.writer.raw(this, this.options.writer.filterOptions(options));
            };

            return XMLRaw;
          }(XMLNode);
        }).call(this); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './NodeType': _req,
        './XMLNode': _req0
      }));
    }
  };
});
//# sourceMappingURL=c4f5ecf956ba21e375857e937b5274b77e26291f.js.map