System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-10-19',
          endpointPrefix: 'kendra-ranking',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceAbbreviation: 'Kendra Ranking',
          serviceFullName: 'Amazon Kendra Intelligent Ranking',
          serviceId: 'Kendra Ranking',
          signatureVersion: 'v4',
          signingName: 'kendra-ranking',
          targetPrefix: 'AWSKendraRerankingFrontendService',
          uid: 'kendra-ranking-2022-10-19'
        },
        operations: {
          CreateRescoreExecutionPlan: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                CapacityUnits: {
                  shape: 'S4'
                },
                Tags: {
                  shape: 'S6'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Id', 'Arn'],
              members: {
                Id: {},
                Arn: {}
              }
            }
          },
          DeleteRescoreExecutionPlan: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            }
          },
          DescribeRescoreExecutionPlan: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                Arn: {},
                Name: {},
                Description: {},
                CapacityUnits: {
                  shape: 'S4'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                UpdatedAt: {
                  type: 'timestamp'
                },
                Status: {},
                ErrorMessage: {}
              }
            }
          },
          ListRescoreExecutionPlans: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SummaryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Id: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      Status: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S6'
                }
              }
            }
          },
          Rescore: {
            input: {
              type: 'structure',
              required: ['RescoreExecutionPlanId', 'SearchQuery', 'Documents'],
              members: {
                RescoreExecutionPlanId: {},
                SearchQuery: {},
                Documents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'OriginalScore'],
                    members: {
                      Id: {},
                      GroupId: {},
                      Title: {},
                      Body: {},
                      TokenizedTitle: {
                        type: 'list',
                        member: {}
                      },
                      TokenizedBody: {
                        type: 'list',
                        member: {}
                      },
                      OriginalScore: {
                        type: 'float'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RescoreId: {},
                ResultItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DocumentId: {},
                      Score: {
                        type: 'float'
                      }
                    }
                  }
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateRescoreExecutionPlan: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                Name: {},
                Description: {},
                CapacityUnits: {
                  shape: 'S4'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            required: ['RescoreCapacityUnits'],
            members: {
              RescoreCapacityUnits: {
                type: 'integer'
              }
            }
          },
          S6: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4d64c451f02ef6b67f75b0f584ae938e84626f7c.js.map