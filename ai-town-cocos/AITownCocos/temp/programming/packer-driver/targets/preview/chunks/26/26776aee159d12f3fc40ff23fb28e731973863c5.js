System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListAccountAssociations: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'LinkedAccounts'
          },
          ListBillingGroupCostReports: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'BillingGroupCostReports'
          },
          ListBillingGroups: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'BillingGroups'
          },
          ListCustomLineItems: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'CustomLineItems'
          },
          ListCustomLineItemVersions: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'CustomLineItemVersions'
          },
          ListPricingPlans: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            non_aggregate_keys: ['BillingPeriod'],
            output_token: 'NextToken',
            result_key: 'PricingPlans'
          },
          ListPricingPlansAssociatedWithPricingRule: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            non_aggregate_keys: ['BillingPeriod', 'PricingRuleArn'],
            output_token: 'NextToken',
            result_key: 'PricingPlanArns'
          },
          ListPricingRules: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            non_aggregate_keys: ['BillingPeriod'],
            output_token: 'NextToken',
            result_key: 'PricingRules'
          },
          ListPricingRulesAssociatedToPricingPlan: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            non_aggregate_keys: ['BillingPeriod', 'PricingPlanArn'],
            output_token: 'NextToken',
            result_key: 'PricingRuleArns'
          },
          ListResourcesAssociatedToCustomLineItem: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            non_aggregate_keys: ['Arn'],
            output_token: 'NextToken',
            result_key: 'AssociatedResources'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=26776aee159d12f3fc40ff23fb28e731973863c5.js.map