System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var AWS = require('../core');

        var rdsutil = require('./rdsutil');

        require('../rds/signer');
        /**
         * @api private
         */


        var crossRegionOperations = ['copyDBSnapshot', 'createDBInstanceReadReplica', 'createDBCluster', 'copyDBClusterSnapshot', 'startDBInstanceAutomatedBackupsReplication'];
        AWS.util.update(AWS.RDS.prototype, {
          /**
           * @api private
           */
          setupRequestListeners: function setupRequestListeners(request) {
            rdsutil.setupRequestListeners(this, request, crossRegionOperations);
          }
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req,
        './rdsutil': _req0,
        '../rds/signer': _req1
      }));
    }
  };
});
//# sourceMappingURL=af855b4adb1d170e6abd8a8f991135709b8d9c3e.js.map