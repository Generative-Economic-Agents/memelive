System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, _isFipsRegion, _isGlobalRegion, _getRealRegion, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        function isFipsRegion(region) {
          return typeof region === 'string' && (region.startsWith('fips-') || region.endsWith('-fips'));
        }

        function isGlobalRegion(region) {
          return typeof region === 'string' && ['aws-global', 'aws-us-gov-global'].includes(region);
        }

        function getRealRegion(region) {
          return ['fips-aws-global', 'aws-fips', 'aws-global'].includes(region) ? 'us-east-1' : ['fips-aws-us-gov-global', 'aws-us-gov-global'].includes(region) ? 'us-gov-west-1' : region.replace(/fips-(dkr-|prod-)?|-fips/, '');
        }

        module.exports = {
          isFipsRegion: isFipsRegion,
          isGlobalRegion: isGlobalRegion,
          getRealRegion: getRealRegion
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _isFipsRegion = module.exports.isFipsRegion;
        _isGlobalRegion = module.exports.isGlobalRegion;
        _getRealRegion = module.exports.getRealRegion;
      }, {});
    }
  };
});
//# sourceMappingURL=c58b5dddc9d778d0e4b48e2c935bb53001b28d36.js.map