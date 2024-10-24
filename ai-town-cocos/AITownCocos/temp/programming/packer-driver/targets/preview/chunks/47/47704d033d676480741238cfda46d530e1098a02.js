System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-01-06',
          endpointPrefix: 'autoscaling-plans',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Auto Scaling Plans',
          serviceId: 'Auto Scaling Plans',
          signatureVersion: 'v4',
          signingName: 'autoscaling-plans',
          targetPrefix: 'AnyScaleScalingPlannerFrontendService',
          uid: 'autoscaling-plans-2018-01-06'
        },
        operations: {
          CreateScalingPlan: {
            input: {
              type: 'structure',
              required: ['ScalingPlanName', 'ApplicationSource', 'ScalingInstructions'],
              members: {
                ScalingPlanName: {},
                ApplicationSource: {
                  shape: 'S3'
                },
                ScalingInstructions: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ScalingPlanVersion'],
              members: {
                ScalingPlanVersion: {
                  type: 'long'
                }
              }
            }
          },
          DeleteScalingPlan: {
            input: {
              type: 'structure',
              required: ['ScalingPlanName', 'ScalingPlanVersion'],
              members: {
                ScalingPlanName: {},
                ScalingPlanVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeScalingPlanResources: {
            input: {
              type: 'structure',
              required: ['ScalingPlanName', 'ScalingPlanVersion'],
              members: {
                ScalingPlanName: {},
                ScalingPlanVersion: {
                  type: 'long'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ScalingPlanResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ScalingPlanName', 'ScalingPlanVersion', 'ServiceNamespace', 'ResourceId', 'ScalableDimension', 'ScalingStatusCode'],
                    members: {
                      ScalingPlanName: {},
                      ScalingPlanVersion: {
                        type: 'long'
                      },
                      ServiceNamespace: {},
                      ResourceId: {},
                      ScalableDimension: {},
                      ScalingPolicies: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['PolicyName', 'PolicyType'],
                          members: {
                            PolicyName: {},
                            PolicyType: {},
                            TargetTrackingConfiguration: {
                              shape: 'Sh'
                            }
                          }
                        }
                      },
                      ScalingStatusCode: {},
                      ScalingStatusMessage: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeScalingPlans: {
            input: {
              type: 'structure',
              members: {
                ScalingPlanNames: {
                  type: 'list',
                  member: {}
                },
                ScalingPlanVersion: {
                  type: 'long'
                },
                ApplicationSources: {
                  type: 'list',
                  member: {
                    shape: 'S3'
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ScalingPlans: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ScalingPlanName', 'ScalingPlanVersion', 'ApplicationSource', 'ScalingInstructions', 'StatusCode'],
                    members: {
                      ScalingPlanName: {},
                      ScalingPlanVersion: {
                        type: 'long'
                      },
                      ApplicationSource: {
                        shape: 'S3'
                      },
                      ScalingInstructions: {
                        shape: 'Sa'
                      },
                      StatusCode: {},
                      StatusMessage: {},
                      StatusStartTime: {
                        type: 'timestamp'
                      },
                      CreationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetScalingPlanResourceForecastData: {
            input: {
              type: 'structure',
              required: ['ScalingPlanName', 'ScalingPlanVersion', 'ServiceNamespace', 'ResourceId', 'ScalableDimension', 'ForecastDataType', 'StartTime', 'EndTime'],
              members: {
                ScalingPlanName: {},
                ScalingPlanVersion: {
                  type: 'long'
                },
                ServiceNamespace: {},
                ResourceId: {},
                ScalableDimension: {},
                ForecastDataType: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Datapoints'],
              members: {
                Datapoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {
                        type: 'timestamp'
                      },
                      Value: {
                        type: 'double'
                      }
                    }
                  }
                }
              }
            }
          },
          UpdateScalingPlan: {
            input: {
              type: 'structure',
              required: ['ScalingPlanName', 'ScalingPlanVersion'],
              members: {
                ScalingPlanName: {},
                ScalingPlanVersion: {
                  type: 'long'
                },
                ApplicationSource: {
                  shape: 'S3'
                },
                ScalingInstructions: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              CloudFormationStackARN: {},
              TagFilters: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Key: {},
                    Values: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ServiceNamespace', 'ResourceId', 'ScalableDimension', 'MinCapacity', 'MaxCapacity', 'TargetTrackingConfigurations'],
              members: {
                ServiceNamespace: {},
                ResourceId: {},
                ScalableDimension: {},
                MinCapacity: {
                  type: 'integer'
                },
                MaxCapacity: {
                  type: 'integer'
                },
                TargetTrackingConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'Sh'
                  }
                },
                PredefinedLoadMetricSpecification: {
                  type: 'structure',
                  required: ['PredefinedLoadMetricType'],
                  members: {
                    PredefinedLoadMetricType: {},
                    ResourceLabel: {}
                  }
                },
                CustomizedLoadMetricSpecification: {
                  type: 'structure',
                  required: ['MetricName', 'Namespace', 'Statistic'],
                  members: {
                    MetricName: {},
                    Namespace: {},
                    Dimensions: {
                      shape: 'So'
                    },
                    Statistic: {},
                    Unit: {}
                  }
                },
                ScheduledActionBufferTime: {
                  type: 'integer'
                },
                PredictiveScalingMaxCapacityBehavior: {},
                PredictiveScalingMaxCapacityBuffer: {
                  type: 'integer'
                },
                PredictiveScalingMode: {},
                ScalingPolicyUpdateBehavior: {},
                DisableDynamicScaling: {
                  type: 'boolean'
                }
              }
            }
          },
          Sh: {
            type: 'structure',
            required: ['TargetValue'],
            members: {
              PredefinedScalingMetricSpecification: {
                type: 'structure',
                required: ['PredefinedScalingMetricType'],
                members: {
                  PredefinedScalingMetricType: {},
                  ResourceLabel: {}
                }
              },
              CustomizedScalingMetricSpecification: {
                type: 'structure',
                required: ['MetricName', 'Namespace', 'Statistic'],
                members: {
                  MetricName: {},
                  Namespace: {},
                  Dimensions: {
                    shape: 'So'
                  },
                  Statistic: {},
                  Unit: {}
                }
              },
              TargetValue: {
                type: 'double'
              },
              DisableScaleIn: {
                type: 'boolean'
              },
              ScaleOutCooldown: {
                type: 'integer'
              },
              ScaleInCooldown: {
                type: 'integer'
              },
              EstimatedInstanceWarmup: {
                type: 'integer'
              }
            }
          },
          So: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Value: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=47704d033d676480741238cfda46d530e1098a02.js.map