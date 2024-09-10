System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListEndpointsByPlatformApplication: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'Endpoints'
          },
          ListOriginationNumbers: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'PhoneNumbers'
          },
          ListPhoneNumbersOptedOut: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'phoneNumbers'
          },
          ListPlatformApplications: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'PlatformApplications'
          },
          ListSMSSandboxPhoneNumbers: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'PhoneNumbers'
          },
          ListSubscriptions: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'Subscriptions'
          },
          ListSubscriptionsByTopic: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'Subscriptions'
          },
          ListTopics: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'Topics'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3a5a084f2d842063afcf5a96463fb8cf23426cf7.js.map