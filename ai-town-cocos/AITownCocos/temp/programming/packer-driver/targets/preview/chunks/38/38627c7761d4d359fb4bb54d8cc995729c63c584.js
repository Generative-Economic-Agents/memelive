System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListDomains: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'DomainSummaries'
          },
          ListFraudsterRegistrationJobs: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'JobSummaries'
          },
          ListFraudsters: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'FraudsterSummaries'
          },
          ListSpeakerEnrollmentJobs: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'JobSummaries'
          },
          ListSpeakers: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'SpeakerSummaries'
          },
          ListWatchlists: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'WatchlistSummaries'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=38627c7761d4d359fb4bb54d8cc995729c63c584.js.map