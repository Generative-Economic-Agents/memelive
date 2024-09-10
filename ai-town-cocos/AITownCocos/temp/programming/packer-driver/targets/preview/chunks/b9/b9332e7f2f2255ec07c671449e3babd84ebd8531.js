System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListAWSDefaultServiceQuotas: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Quotas'
          },
          ListRequestedServiceQuotaChangeHistory: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'RequestedQuotas'
          },
          ListRequestedServiceQuotaChangeHistoryByQuota: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'RequestedQuotas'
          },
          ListServiceQuotaIncreaseRequestsInTemplate: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'ServiceQuotaIncreaseRequestInTemplateList'
          },
          ListServiceQuotas: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Quotas'
          },
          ListServices: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Services'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b9332e7f2f2255ec07c671449e3babd84ebd8531.js.map