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
        var AWS = require('../core');

        var rdsutil = require('./rdsutil');
        /**
        * @api private
        */


        var crossRegionOperations = ['createDBCluster', 'copyDBClusterSnapshot'];
        AWS.util.update(AWS.DocDB.prototype, {
          /**
          * @api private
          */
          setupRequestListeners: function setupRequestListeners(request) {
            if (crossRegionOperations.indexOf(request.operation) !== -1 && this.config.params && this.config.params.SourceRegion && request.params && !request.params.SourceRegion) {
              request.params.SourceRegion = this.config.params.SourceRegion;
            }

            rdsutil.setupRequestListeners(this, request, crossRegionOperations);
          }
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req,
        './rdsutil': _req0
      }));
    }
  };
});
//# sourceMappingURL=5c27be88f6eeed5bb2bda5212a97fbcd853f8104.js.map