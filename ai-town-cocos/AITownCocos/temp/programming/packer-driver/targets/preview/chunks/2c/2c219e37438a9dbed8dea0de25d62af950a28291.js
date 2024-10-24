System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeMergeConflicts: {
            input_token: 'nextToken',
            limit_key: 'maxMergeHunks',
            output_token: 'nextToken'
          },
          DescribePullRequestEvents: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken'
          },
          GetCommentReactions: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken'
          },
          GetCommentsForComparedCommit: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken'
          },
          GetCommentsForPullRequest: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken'
          },
          GetDifferences: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          GetMergeConflicts: {
            input_token: 'nextToken',
            limit_key: 'maxConflictFiles',
            output_token: 'nextToken'
          },
          ListApprovalRuleTemplates: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken'
          },
          ListAssociatedApprovalRuleTemplatesForRepository: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken'
          },
          ListBranches: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'branches'
          },
          ListFileCommitHistory: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken'
          },
          ListPullRequests: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken'
          },
          ListRepositories: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'repositories'
          },
          ListRepositoriesForApprovalRuleTemplate: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2c219e37438a9dbed8dea0de25d62af950a28291.js.map