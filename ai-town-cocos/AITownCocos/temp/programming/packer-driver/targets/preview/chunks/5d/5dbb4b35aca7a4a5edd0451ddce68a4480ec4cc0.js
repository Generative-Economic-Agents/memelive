System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          AssetModelNotExists: {
            delay: 3,
            maxAttempts: 20,
            operation: 'DescribeAssetModel',
            acceptors: [{
              state: 'success',
              matcher: 'error',
              expected: 'ResourceNotFoundException'
            }]
          },
          AssetModelActive: {
            delay: 3,
            maxAttempts: 20,
            operation: 'DescribeAssetModel',
            acceptors: [{
              state: 'success',
              matcher: 'path',
              argument: 'assetModelStatus.state',
              expected: 'ACTIVE'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'assetModelStatus.state',
              expected: 'FAILED'
            }]
          },
          AssetNotExists: {
            delay: 3,
            maxAttempts: 20,
            operation: 'DescribeAsset',
            acceptors: [{
              state: 'success',
              matcher: 'error',
              expected: 'ResourceNotFoundException'
            }]
          },
          AssetActive: {
            delay: 3,
            maxAttempts: 20,
            operation: 'DescribeAsset',
            acceptors: [{
              state: 'success',
              matcher: 'path',
              argument: 'assetStatus.state',
              expected: 'ACTIVE'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'assetStatus.state',
              expected: 'FAILED'
            }]
          },
          PortalNotExists: {
            delay: 3,
            maxAttempts: 20,
            operation: 'DescribePortal',
            acceptors: [{
              state: 'success',
              matcher: 'error',
              expected: 'ResourceNotFoundException'
            }]
          },
          PortalActive: {
            delay: 3,
            maxAttempts: 20,
            operation: 'DescribePortal',
            acceptors: [{
              state: 'success',
              matcher: 'path',
              argument: 'portalStatus.state',
              expected: 'ACTIVE'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5dbb4b35aca7a4a5edd0451ddce68a4480ec4cc0.js.map