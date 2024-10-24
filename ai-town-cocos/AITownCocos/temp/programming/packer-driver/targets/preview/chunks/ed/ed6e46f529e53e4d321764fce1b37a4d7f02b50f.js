System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-11-07',
          endpointPrefix: 'a2i-runtime.sagemaker',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Augmented AI Runtime',
          serviceId: 'SageMaker A2I Runtime',
          signatureVersion: 'v4',
          signingName: 'sagemaker',
          uid: 'sagemaker-a2i-runtime-2019-11-07'
        },
        operations: {
          DeleteHumanLoop: {
            http: {
              method: 'DELETE',
              requestUri: '/human-loops/{HumanLoopName}'
            },
            input: {
              type: 'structure',
              required: ['HumanLoopName'],
              members: {
                HumanLoopName: {
                  location: 'uri',
                  locationName: 'HumanLoopName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeHumanLoop: {
            http: {
              method: 'GET',
              requestUri: '/human-loops/{HumanLoopName}'
            },
            input: {
              type: 'structure',
              required: ['HumanLoopName'],
              members: {
                HumanLoopName: {
                  location: 'uri',
                  locationName: 'HumanLoopName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CreationTime', 'HumanLoopStatus', 'HumanLoopName', 'HumanLoopArn', 'FlowDefinitionArn'],
              members: {
                CreationTime: {
                  shape: 'S6'
                },
                FailureReason: {},
                FailureCode: {},
                HumanLoopStatus: {},
                HumanLoopName: {},
                HumanLoopArn: {},
                FlowDefinitionArn: {},
                HumanLoopOutput: {
                  type: 'structure',
                  required: ['OutputS3Uri'],
                  members: {
                    OutputS3Uri: {}
                  }
                }
              }
            }
          },
          ListHumanLoops: {
            http: {
              method: 'GET',
              requestUri: '/human-loops'
            },
            input: {
              type: 'structure',
              required: ['FlowDefinitionArn'],
              members: {
                CreationTimeAfter: {
                  shape: 'S6',
                  location: 'querystring',
                  locationName: 'CreationTimeAfter'
                },
                CreationTimeBefore: {
                  shape: 'S6',
                  location: 'querystring',
                  locationName: 'CreationTimeBefore'
                },
                FlowDefinitionArn: {
                  location: 'querystring',
                  locationName: 'FlowDefinitionArn'
                },
                SortOrder: {
                  location: 'querystring',
                  locationName: 'SortOrder'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HumanLoopSummaries'],
              members: {
                HumanLoopSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      HumanLoopName: {},
                      HumanLoopStatus: {},
                      CreationTime: {
                        shape: 'S6'
                      },
                      FailureReason: {},
                      FlowDefinitionArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          StartHumanLoop: {
            http: {
              requestUri: '/human-loops'
            },
            input: {
              type: 'structure',
              required: ['HumanLoopName', 'FlowDefinitionArn', 'HumanLoopInput'],
              members: {
                HumanLoopName: {},
                FlowDefinitionArn: {},
                HumanLoopInput: {
                  type: 'structure',
                  required: ['InputContent'],
                  members: {
                    InputContent: {}
                  }
                },
                DataAttributes: {
                  type: 'structure',
                  required: ['ContentClassifiers'],
                  members: {
                    ContentClassifiers: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HumanLoopArn: {}
              }
            }
          },
          StopHumanLoop: {
            http: {
              requestUri: '/human-loops/stop'
            },
            input: {
              type: 'structure',
              required: ['HumanLoopName'],
              members: {
                HumanLoopName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S6: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ed6e46f529e53e4d321764fce1b37a4d7f02b50f.js.map