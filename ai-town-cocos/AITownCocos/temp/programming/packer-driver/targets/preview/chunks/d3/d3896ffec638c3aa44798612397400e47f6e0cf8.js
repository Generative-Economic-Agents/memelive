System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          ImageScanComplete: {
            description: 'Wait until an image scan is complete and findings can be accessed',
            operation: 'DescribeImageScanFindings',
            delay: 5,
            maxAttempts: 60,
            acceptors: [{
              state: 'success',
              matcher: 'path',
              argument: 'imageScanStatus.status',
              expected: 'COMPLETE'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'imageScanStatus.status',
              expected: 'FAILED'
            }]
          },
          LifecyclePolicyPreviewComplete: {
            description: 'Wait until a lifecycle policy preview request is complete and results can be accessed',
            operation: 'GetLifecyclePolicyPreview',
            delay: 5,
            maxAttempts: 20,
            acceptors: [{
              state: 'success',
              matcher: 'path',
              argument: 'status',
              expected: 'COMPLETE'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'status',
              expected: 'FAILED'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d3896ffec638c3aa44798612397400e47f6e0cf8.js.map