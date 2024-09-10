System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListAttacks: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'AttackSummaries'
          },
          ListProtectionGroups: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListProtections: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Protections'
          },
          ListResourcesInProtectionGroup: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=db364bedaee01c5a3e2909212a8e7a08d215801f.js.map