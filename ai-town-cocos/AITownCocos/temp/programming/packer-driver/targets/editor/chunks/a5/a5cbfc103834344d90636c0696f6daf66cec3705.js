System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var util = require('../util');

        function JsonBuilder() {}

        JsonBuilder.prototype.build = function (value, shape) {
          return JSON.stringify(translate(value, shape));
        };

        function translate(value, shape) {
          if (!shape || value === undefined || value === null) return undefined;

          switch (shape.type) {
            case 'structure':
              return translateStructure(value, shape);

            case 'map':
              return translateMap(value, shape);

            case 'list':
              return translateList(value, shape);

            default:
              return translateScalar(value, shape);
          }
        }

        function translateStructure(structure, shape) {
          if (shape.isDocument) {
            return structure;
          }

          var struct = {};
          util.each(structure, function (name, value) {
            var memberShape = shape.members[name];

            if (memberShape) {
              if (memberShape.location !== 'body') return;
              var locationName = memberShape.isLocationName ? memberShape.name : name;
              var result = translate(value, memberShape);
              if (result !== undefined) struct[locationName] = result;
            }
          });
          return struct;
        }

        function translateList(list, shape) {
          var out = [];
          util.arrayEach(list, function (value) {
            var result = translate(value, shape.member);
            if (result !== undefined) out.push(result);
          });
          return out;
        }

        function translateMap(map, shape) {
          var out = {};
          util.each(map, function (key, value) {
            var result = translate(value, shape.value);
            if (result !== undefined) out[key] = result;
          });
          return out;
        }

        function translateScalar(value, shape) {
          return shape.toWireFormat(value);
        }
        /**
         * @api private
         */


        module.exports = JsonBuilder; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../util': _req
      }));
    }
  };
});
//# sourceMappingURL=a5cbfc103834344d90636c0696f6daf66cec3705.js.map