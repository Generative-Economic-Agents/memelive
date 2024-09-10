System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          IdentityExists: {
            delay: 3,
            operation: 'GetIdentityVerificationAttributes',
            maxAttempts: 20,
            acceptors: [{
              expected: 'Success',
              matcher: 'pathAll',
              state: 'success',
              argument: 'VerificationAttributes.*.VerificationStatus'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4e24db0a89c70bb722b800010fcd56f084c278cd.js.map