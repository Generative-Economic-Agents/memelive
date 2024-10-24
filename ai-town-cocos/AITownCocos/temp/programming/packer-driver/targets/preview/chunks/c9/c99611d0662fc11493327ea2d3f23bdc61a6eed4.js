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

        function JsonParser() {}

        JsonParser.prototype.parse = function (value, shape) {
          return translate(JSON.parse(value), shape);
        };

        function translate(value, shape) {
          if (!shape || value === undefined) return undefined;

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
          if (structure == null) return undefined;
          if (shape.isDocument) return structure;
          var struct = {};
          var shapeMembers = shape.members;
          var isAwsQueryCompatible = shape.api && shape.api.awsQueryCompatible;
          util.each(shapeMembers, function (name, memberShape) {
            var locationName = memberShape.isLocationName ? memberShape.name : name;

            if (Object.prototype.hasOwnProperty.call(structure, locationName)) {
              var value = structure[locationName];
              var result = translate(value, memberShape);
              if (result !== undefined) struct[name] = result;
            } else if (isAwsQueryCompatible && memberShape.defaultValue) {
              if (memberShape.type === 'list') {
                struct[name] = typeof memberShape.defaultValue === 'function' ? memberShape.defaultValue() : memberShape.defaultValue;
              }
            }
          });
          return struct;
        }

        function translateList(list, shape) {
          if (list == null) return undefined;
          var out = [];
          util.arrayEach(list, function (value) {
            var result = translate(value, shape.member);
            if (result === undefined) out.push(null);else out.push(result);
          });
          return out;
        }

        function translateMap(map, shape) {
          if (map == null) return undefined;
          var out = {};
          util.each(map, function (key, value) {
            var result = translate(value, shape.value);
            if (result === undefined) out[key] = null;else out[key] = result;
          });
          return out;
        }

        function translateScalar(value, shape) {
          return shape.toType(value);
        }
        /**
         * @api private
         */


        module.exports = JsonParser; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../util': _req
      }));
    }
  };
});
//# sourceMappingURL=c99611d0662fc11493327ea2d3f23bdc61a6eed4.js.map