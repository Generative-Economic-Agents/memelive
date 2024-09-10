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

        var typeOf = require('./types').typeOf;
        /**
         * @api private
         */


        var memberTypeToSetType = {
          'String': 'String',
          'Number': 'Number',
          'NumberValue': 'Number',
          'Binary': 'Binary'
        };
        /**
         * @api private
         */

        var DynamoDBSet = util.inherit({
          constructor: function Set(list, options) {
            options = options || {};
            this.wrapperName = 'Set';
            this.initialize(list, options.validate);
          },
          initialize: function (list, validate) {
            var self = this;
            self.values = [].concat(list);
            self.detectType();

            if (validate) {
              self.validate();
            }
          },
          detectType: function () {
            this.type = memberTypeToSetType[typeOf(this.values[0])];

            if (!this.type) {
              throw util.error(new Error(), {
                code: 'InvalidSetType',
                message: 'Sets can contain string, number, or binary values'
              });
            }
          },
          validate: function () {
            var self = this;
            var length = self.values.length;
            var values = self.values;

            for (var i = 0; i < length; i++) {
              if (memberTypeToSetType[typeOf(values[i])] !== self.type) {
                throw util.error(new Error(), {
                  code: 'InvalidType',
                  message: self.type + ' Set contains ' + typeOf(values[i]) + ' value'
                });
              }
            }
          },

          /**
           * Render the underlying values only when converting to JSON.
           */
          toJSON: function () {
            var self = this;
            return self.values;
          }
        });
        /**
         * @api private
         */

        module.exports = DynamoDBSet; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req,
        './types': _req0
      }));
    }
  };
});
//# sourceMappingURL=0d59faf4f815fed20510545cd98477bcda873862.js.map