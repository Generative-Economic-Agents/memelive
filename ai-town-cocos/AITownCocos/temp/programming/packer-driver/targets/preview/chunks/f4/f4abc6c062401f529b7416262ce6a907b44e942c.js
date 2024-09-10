System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-09-30',
          endpointPrefix: 'metrics.sagemaker',
          protocol: 'rest-json',
          serviceAbbreviation: 'SageMaker Metrics',
          serviceFullName: 'Amazon SageMaker Metrics Service',
          serviceId: 'SageMaker Metrics',
          signatureVersion: 'v4',
          signingName: 'sagemaker',
          uid: 'sagemaker-metrics-2022-09-30'
        },
        operations: {
          BatchPutMetrics: {
            http: {
              method: 'PUT',
              requestUri: '/BatchPutMetrics'
            },
            input: {
              type: 'structure',
              required: ['TrialComponentName', 'MetricData'],
              members: {
                TrialComponentName: {},
                MetricData: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['MetricName', 'Timestamp', 'Value'],
                    members: {
                      MetricName: {},
                      Timestamp: {
                        type: 'timestamp'
                      },
                      Step: {
                        type: 'integer'
                      },
                      Value: {
                        type: 'double'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Code: {},
                      MetricIndex: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=f4abc6c062401f529b7416262ce6a907b44e942c.js.map