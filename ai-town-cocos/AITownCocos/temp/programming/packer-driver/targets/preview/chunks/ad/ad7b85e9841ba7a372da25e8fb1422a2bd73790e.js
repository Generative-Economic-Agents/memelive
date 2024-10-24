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

        function QueryParamSerializer() {}

        QueryParamSerializer.prototype.serialize = function (params, shape, fn) {
          serializeStructure('', params, shape, fn);
        };

        function ucfirst(shape) {
          if (shape.isQueryName || shape.api.protocol !== 'ec2') {
            return shape.name;
          } else {
            return shape.name[0].toUpperCase() + shape.name.substr(1);
          }
        }

        function serializeStructure(prefix, struct, rules, fn) {
          util.each(rules.members, function (name, member) {
            var value = struct[name];
            if (value === null || value === undefined) return;
            var memberName = ucfirst(member);
            memberName = prefix ? prefix + '.' + memberName : memberName;
            serializeMember(memberName, value, member, fn);
          });
        }

        function serializeMap(name, map, rules, fn) {
          var i = 1;
          util.each(map, function (key, value) {
            var prefix = rules.flattened ? '.' : '.entry.';
            var position = prefix + i++ + '.';
            var keyName = position + (rules.key.name || 'key');
            var valueName = position + (rules.value.name || 'value');
            serializeMember(name + keyName, key, rules.key, fn);
            serializeMember(name + valueName, value, rules.value, fn);
          });
        }

        function serializeList(name, list, rules, fn) {
          var memberRules = rules.member || {};

          if (list.length === 0) {
            if (rules.api.protocol !== 'ec2') {
              fn.call(this, name, null);
            }

            return;
          }

          util.arrayEach(list, function (v, n) {
            var suffix = '.' + (n + 1);

            if (rules.api.protocol === 'ec2') {
              // Do nothing for EC2
              suffix = suffix + ''; // make linter happy
            } else if (rules.flattened) {
              if (memberRules.name) {
                var parts = name.split('.');
                parts.pop();
                parts.push(ucfirst(memberRules));
                name = parts.join('.');
              }
            } else {
              suffix = '.' + (memberRules.name ? memberRules.name : 'member') + suffix;
            }

            serializeMember(name + suffix, v, memberRules, fn);
          });
        }

        function serializeMember(name, value, rules, fn) {
          if (value === null || value === undefined) return;

          if (rules.type === 'structure') {
            serializeStructure(name, value, rules, fn);
          } else if (rules.type === 'list') {
            serializeList(name, value, rules, fn);
          } else if (rules.type === 'map') {
            serializeMap(name, value, rules, fn);
          } else {
            fn(name, rules.toWireFormat(value).toString());
          }
        }
        /**
         * @api private
         */


        module.exports = QueryParamSerializer; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../util': _req
      }));
    }
  };
});
//# sourceMappingURL=ad7b85e9841ba7a372da25e8fb1422a2bd73790e.js.map