System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          ScraperActive: {
            description: 'Wait until a scraper reaches ACTIVE status',
            delay: 2,
            maxAttempts: 60,
            operation: 'DescribeScraper',
            acceptors: [{
              matcher: 'path',
              argument: 'scraper.status.statusCode',
              state: 'success',
              expected: 'ACTIVE'
            }, {
              matcher: 'path',
              argument: 'scraper.status.statusCode',
              state: 'failure',
              expected: 'CREATION_FAILED'
            }]
          },
          ScraperDeleted: {
            description: 'Wait until a scraper reaches DELETED status',
            delay: 2,
            maxAttempts: 60,
            operation: 'DescribeScraper',
            acceptors: [{
              matcher: 'error',
              state: 'success',
              expected: 'ResourceNotFoundException'
            }, {
              matcher: 'path',
              argument: 'scraper.status.statusCode',
              state: 'failure',
              expected: 'DELETION_FAILED'
            }]
          },
          WorkspaceActive: {
            description: 'Wait until a workspace reaches ACTIVE status',
            delay: 2,
            maxAttempts: 60,
            operation: 'DescribeWorkspace',
            acceptors: [{
              matcher: 'path',
              argument: 'workspace.status.statusCode',
              state: 'success',
              expected: 'ACTIVE'
            }, {
              matcher: 'path',
              argument: 'workspace.status.statusCode',
              state: 'retry',
              expected: 'UPDATING'
            }, {
              matcher: 'path',
              argument: 'workspace.status.statusCode',
              state: 'retry',
              expected: 'CREATING'
            }]
          },
          WorkspaceDeleted: {
            description: 'Wait until a workspace reaches DELETED status',
            delay: 2,
            maxAttempts: 60,
            operation: 'DescribeWorkspace',
            acceptors: [{
              matcher: 'error',
              state: 'success',
              expected: 'ResourceNotFoundException'
            }, {
              matcher: 'path',
              argument: 'workspace.status.statusCode',
              state: 'retry',
              expected: 'DELETING'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a9f639c1a09cb153875b59c4283c8a478cd0e1ba.js.map