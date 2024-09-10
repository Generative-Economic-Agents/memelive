System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          RepositoryAssociationSucceeded: {
            description: 'Wait until a repository association is complete.',
            operation: 'DescribeRepositoryAssociation',
            delay: 10,
            maxAttempts: 30,
            acceptors: [{
              state: 'success',
              matcher: 'path',
              argument: 'RepositoryAssociation.State',
              expected: 'Associated'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'RepositoryAssociation.State',
              expected: 'Failed'
            }, {
              state: 'retry',
              matcher: 'path',
              argument: 'RepositoryAssociation.State',
              expected: 'Associating'
            }]
          },
          CodeReviewCompleted: {
            description: 'Wait until a code review is complete.',
            operation: 'DescribeCodeReview',
            delay: 10,
            maxAttempts: 180,
            acceptors: [{
              state: 'success',
              matcher: 'path',
              argument: 'CodeReview.State',
              expected: 'Completed'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'CodeReview.State',
              expected: 'Failed'
            }, {
              state: 'retry',
              matcher: 'path',
              argument: 'CodeReview.State',
              expected: 'Pending'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e9067b3be72b3054160c1abeeb305ee03775dd4a.js.map