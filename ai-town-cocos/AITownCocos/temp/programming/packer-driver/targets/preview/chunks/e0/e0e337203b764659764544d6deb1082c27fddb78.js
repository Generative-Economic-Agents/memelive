System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          InstanceProfileExists: {
            delay: 1,
            operation: 'GetInstanceProfile',
            maxAttempts: 40,
            acceptors: [{
              expected: 200,
              matcher: 'status',
              state: 'success'
            }, {
              state: 'retry',
              matcher: 'status',
              expected: 404
            }]
          },
          UserExists: {
            delay: 1,
            operation: 'GetUser',
            maxAttempts: 20,
            acceptors: [{
              state: 'success',
              matcher: 'status',
              expected: 200
            }, {
              state: 'retry',
              matcher: 'error',
              expected: 'NoSuchEntity'
            }]
          },
          RoleExists: {
            delay: 1,
            operation: 'GetRole',
            maxAttempts: 20,
            acceptors: [{
              state: 'success',
              matcher: 'status',
              expected: 200
            }, {
              state: 'retry',
              matcher: 'error',
              expected: 'NoSuchEntity'
            }]
          },
          PolicyExists: {
            delay: 1,
            operation: 'GetPolicy',
            maxAttempts: 20,
            acceptors: [{
              state: 'success',
              matcher: 'status',
              expected: 200
            }, {
              state: 'retry',
              matcher: 'error',
              expected: 'NoSuchEntity'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e0e337203b764659764544d6deb1082c27fddb78.js.map