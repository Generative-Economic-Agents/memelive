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
        var util = require('../core').util;
        /**
         * An object recognizable as a numeric value that stores the underlying number
         * as a string.
         *
         * Intended to be a deserialization target for the DynamoDB Document Client when
         * the `wrapNumbers` flag is set. This allows for numeric values that lose
         * precision when converted to JavaScript's `number` type.
         */


        var DynamoDBNumberValue = util.inherit({
          constructor: function NumberValue(value) {
            this.wrapperName = 'NumberValue';
            this.value = value.toString();
          },

          /**
           * Render the underlying value as a number when converting to JSON.
           */
          toJSON: function toJSON() {
            return this.toNumber();
          },

          /**
           * Convert the underlying value to a JavaScript number.
           */
          toNumber: function toNumber() {
            return Number(this.value);
          },

          /**
           * Return a string representing the unaltered value provided to the
           * constructor.
           */
          toString: function toString() {
            return this.value;
          }
        });
        /**
         * @api private
         */

        module.exports = DynamoDBNumberValue; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=211b505d1fcc3402039679a927a5bb8b5bbde684.js.map