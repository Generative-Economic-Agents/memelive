System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          BucketExists: {
            delay: 5,
            operation: 'HeadBucket',
            maxAttempts: 20,
            acceptors: [{
              expected: 200,
              matcher: 'status',
              state: 'success'
            }, {
              expected: 301,
              matcher: 'status',
              state: 'success'
            }, {
              expected: 403,
              matcher: 'status',
              state: 'success'
            }, {
              expected: 404,
              matcher: 'status',
              state: 'retry'
            }]
          },
          BucketNotExists: {
            delay: 5,
            operation: 'HeadBucket',
            maxAttempts: 20,
            acceptors: [{
              expected: 404,
              matcher: 'status',
              state: 'success'
            }]
          },
          ObjectExists: {
            delay: 5,
            operation: 'HeadObject',
            maxAttempts: 20,
            acceptors: [{
              expected: 200,
              matcher: 'status',
              state: 'success'
            }, {
              expected: 404,
              matcher: 'status',
              state: 'retry'
            }]
          },
          ObjectNotExists: {
            delay: 5,
            operation: 'HeadObject',
            maxAttempts: 20,
            acceptors: [{
              expected: 404,
              matcher: 'status',
              state: 'success'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=06abc25788721d2f3c47f03b522712d7bbe963ab.js.map