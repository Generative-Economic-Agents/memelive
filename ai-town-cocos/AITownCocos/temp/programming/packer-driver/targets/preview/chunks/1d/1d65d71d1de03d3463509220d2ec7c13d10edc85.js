System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          CertificateAuthorityCSRCreated: {
            description: 'Wait until a Certificate Authority CSR is created',
            operation: 'GetCertificateAuthorityCsr',
            delay: 3,
            maxAttempts: 60,
            acceptors: [{
              state: 'success',
              matcher: 'status',
              expected: 200
            }, {
              state: 'retry',
              matcher: 'error',
              expected: 'RequestInProgressException'
            }, {
              state: 'failure',
              matcher: 'error',
              expected: 'AccessDeniedException'
            }]
          },
          CertificateIssued: {
            description: 'Wait until a certificate is issued',
            operation: 'GetCertificate',
            delay: 1,
            maxAttempts: 60,
            acceptors: [{
              state: 'success',
              matcher: 'status',
              expected: 200
            }, {
              state: 'retry',
              matcher: 'error',
              expected: 'RequestInProgressException'
            }, {
              state: 'failure',
              matcher: 'error',
              expected: 'AccessDeniedException'
            }]
          },
          AuditReportCreated: {
            description: 'Wait until a Audit Report is created',
            operation: 'DescribeCertificateAuthorityAuditReport',
            delay: 3,
            maxAttempts: 60,
            acceptors: [{
              state: 'success',
              matcher: 'path',
              argument: 'AuditReportStatus',
              expected: 'SUCCESS'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'AuditReportStatus',
              expected: 'FAILED'
            }, {
              state: 'failure',
              matcher: 'error',
              expected: 'AccessDeniedException'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1d65d71d1de03d3463509220d2ec7c13d10edc85.js.map