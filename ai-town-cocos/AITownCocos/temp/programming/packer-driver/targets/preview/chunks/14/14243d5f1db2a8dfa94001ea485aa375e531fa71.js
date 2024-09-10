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
        var util = require('../core').util;

        var convert = require('./converter');

        var Translator = function Translator(options) {
          options = options || {};
          this.attrValue = options.attrValue;
          this.convertEmptyValues = Boolean(options.convertEmptyValues);
          this.wrapNumbers = Boolean(options.wrapNumbers);
        };

        Translator.prototype.translateInput = function (value, shape) {
          this.mode = 'input';
          return this.translate(value, shape);
        };

        Translator.prototype.translateOutput = function (value, shape) {
          this.mode = 'output';
          return this.translate(value, shape);
        };

        Translator.prototype.translate = function (value, shape) {
          var self = this;
          if (!shape || value === undefined) return undefined;

          if (shape.shape === self.attrValue) {
            return convert[self.mode](value, {
              convertEmptyValues: self.convertEmptyValues,
              wrapNumbers: self.wrapNumbers
            });
          }

          switch (shape.type) {
            case 'structure':
              return self.translateStructure(value, shape);

            case 'map':
              return self.translateMap(value, shape);

            case 'list':
              return self.translateList(value, shape);

            default:
              return self.translateScalar(value, shape);
          }
        };

        Translator.prototype.translateStructure = function (structure, shape) {
          var self = this;
          if (structure == null) return undefined;
          var struct = {};
          util.each(structure, function (name, value) {
            var memberShape = shape.members[name];

            if (memberShape) {
              var result = self.translate(value, memberShape);
              if (result !== undefined) struct[name] = result;
            }
          });
          return struct;
        };

        Translator.prototype.translateList = function (list, shape) {
          var self = this;
          if (list == null) return undefined;
          var out = [];
          util.arrayEach(list, function (value) {
            var result = self.translate(value, shape.member);
            if (result === undefined) out.push(null);else out.push(result);
          });
          return out;
        };

        Translator.prototype.translateMap = function (map, shape) {
          var self = this;
          if (map == null) return undefined;
          var out = {};
          util.each(map, function (key, value) {
            var result = self.translate(value, shape.value);
            if (result === undefined) out[key] = null;else out[key] = result;
          });
          return out;
        };

        Translator.prototype.translateScalar = function (value, shape) {
          return shape.toType(value);
        };
        /**
         * @api private
         */


        module.exports = Translator; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req,
        './converter': _req0
      }));
    }
  };
});
//# sourceMappingURL=14243d5f1db2a8dfa94001ea485aa375e531fa71.js.map