System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          NodeAssociated: {
            delay: 15,
            maxAttempts: 15,
            operation: 'DescribeNodeAssociationStatus',
            description: 'Wait until node is associated or disassociated.',
            acceptors: [{
              expected: 'SUCCESS',
              state: 'success',
              matcher: 'path',
              argument: 'NodeAssociationStatus'
            }, {
              expected: 'FAILED',
              state: 'failure',
              matcher: 'path',
              argument: 'NodeAssociationStatus'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4a083aff9e62f3d4502ce46c9ea3f9c5beaf37d1.js.map