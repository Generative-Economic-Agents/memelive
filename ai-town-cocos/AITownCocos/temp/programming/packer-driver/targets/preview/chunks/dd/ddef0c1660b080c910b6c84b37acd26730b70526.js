System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          FindingRevealed: {
            description: 'Wait until the sensitive data occurrences are ready.',
            delay: 2,
            maxAttempts: 60,
            operation: 'GetSensitiveDataOccurrences',
            acceptors: [{
              matcher: 'path',
              argument: 'status',
              state: 'success',
              expected: 'SUCCESS'
            }, {
              matcher: 'path',
              argument: 'status',
              state: 'success',
              expected: 'ERROR'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ddef0c1660b080c910b6c84b37acd26730b70526.js.map