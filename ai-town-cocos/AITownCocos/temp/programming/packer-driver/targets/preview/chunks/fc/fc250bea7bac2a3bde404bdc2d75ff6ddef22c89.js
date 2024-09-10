System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          CertificateValidated: {
            delay: 60,
            maxAttempts: 40,
            operation: 'DescribeCertificate',
            acceptors: [{
              matcher: 'pathAll',
              expected: 'SUCCESS',
              argument: 'Certificate.DomainValidationOptions[].ValidationStatus',
              state: 'success'
            }, {
              matcher: 'pathAny',
              expected: 'PENDING_VALIDATION',
              argument: 'Certificate.DomainValidationOptions[].ValidationStatus',
              state: 'retry'
            }, {
              matcher: 'path',
              expected: 'FAILED',
              argument: 'Certificate.Status',
              state: 'failure'
            }, {
              matcher: 'error',
              expected: 'ResourceNotFoundException',
              state: 'failure'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=fc250bea7bac2a3bde404bdc2d75ff6ddef22c89.js.map