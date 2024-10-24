System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-02-06',
          endpointPrefix: 'application-autoscaling',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'Application Auto Scaling',
          serviceId: 'Application Auto Scaling',
          signatureVersion: 'v4',
          signingName: 'application-autoscaling',
          targetPrefix: 'AnyScaleFrontendService',
          uid: 'application-autoscaling-2016-02-06'
        },
        operations: {
          DeleteScalingPolicy: {
            input: {
              type: 'structure',
              required: ['PolicyName', 'ServiceNamespace', 'ResourceId', 'ScalableDimension'],
              members: {
                PolicyName: {},
                ServiceNamespace: {},
                ResourceId: {},
                ScalableDimension: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteScheduledAction: {
            input: {
              type: 'structure',
              required: ['ServiceNamespace', 'ScheduledActionName', 'ResourceId', 'ScalableDimension'],
              members: {
                ServiceNamespace: {},
                ScheduledActionName: {},
                ResourceId: {},
                ScalableDimension: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterScalableTarget: {
            input: {
              type: 'structure',
              required: ['ServiceNamespace', 'ResourceId', 'ScalableDimension'],
              members: {
                ServiceNamespace: {},
                ResourceId: {},
                ScalableDimension: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeScalableTargets: {
            input: {
              type: 'structure',
              required: ['ServiceNamespace'],
              members: {
                ServiceNamespace: {},
                ResourceIds: {
                  shape: 'Sb'
                },
                ScalableDimension: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ScalableTargets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ServiceNamespace', 'ResourceId', 'ScalableDimension', 'MinCapacity', 'MaxCapacity', 'RoleARN', 'CreationTime'],
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
                      RoleARN: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      SuspendedState: {
                        shape: 'Sj'
                      },
                      ScalableTargetARN: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeScalingActivities: {
            input: {
              type: 'structure',
              required: ['ServiceNamespace'],
              members: {
                ServiceNamespace: {},
                ResourceId: {},
                ScalableDimension: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                IncludeNotScaledActivities: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ScalingActivities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ActivityId', 'ServiceNamespace', 'ResourceId', 'ScalableDimension', 'Description', 'Cause', 'StartTime', 'StatusCode'],
                    members: {
                      ActivityId: {},
                      ServiceNamespace: {},
                      ResourceId: {},
                      ScalableDimension: {},
                      Description: {},
                      Cause: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      StatusCode: {},
                      StatusMessage: {},
                      Details: {},
                      NotScaledReasons: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['Code'],
                          members: {
                            Code: {},
                            MaxCapacity: {
                              type: 'integer'
                            },
                            MinCapacity: {
                              type: 'integer'
                            },
                            CurrentCapacity: {
                              type: 'integer'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeScalingPolicies: {
            input: {
              type: 'structure',
              required: ['ServiceNamespace'],
              members: {
                PolicyNames: {
                  shape: 'Sb'
                },
                ServiceNamespace: {},
                ResourceId: {},
                ScalableDimension: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ScalingPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['PolicyARN', 'PolicyName', 'ServiceNamespace', 'ResourceId', 'ScalableDimension', 'PolicyType', 'CreationTime'],
                    members: {
                      PolicyARN: {},
                      PolicyName: {},
                      ServiceNamespace: {},
                      ResourceId: {},
                      ScalableDimension: {},
                      PolicyType: {},
                      StepScalingPolicyConfiguration: {
                        shape: 'S10'
                      },
                      TargetTrackingScalingPolicyConfiguration: {
                        shape: 'S19'
                      },
                      Alarms: {
                        shape: 'S21'
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
          DescribeScheduledActions: {
            input: {
              type: 'structure',
              required: ['ServiceNamespace'],
              members: {
                ScheduledActionNames: {
                  shape: 'Sb'
                },
                ServiceNamespace: {},
                ResourceId: {},
                ScalableDimension: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ScheduledActions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ScheduledActionName', 'ScheduledActionARN', 'ServiceNamespace', 'Schedule', 'ResourceId', 'CreationTime'],
                    members: {
                      ScheduledActionName: {},
                      ScheduledActionARN: {},
                      ServiceNamespace: {},
                      Schedule: {},
                      Timezone: {},
                      ResourceId: {},
                      ScalableDimension: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      ScalableTargetAction: {
                        shape: 'S28'
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
                  shape: 'S2c'
                }
              }
            }
          },
          PutScalingPolicy: {
            input: {
              type: 'structure',
              required: ['PolicyName', 'ServiceNamespace', 'ResourceId', 'ScalableDimension'],
              members: {
                PolicyName: {},
                ServiceNamespace: {},
                ResourceId: {},
                ScalableDimension: {},
                PolicyType: {},
                StepScalingPolicyConfiguration: {
                  shape: 'S10'
                },
                TargetTrackingScalingPolicyConfiguration: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['PolicyARN'],
              members: {
                PolicyARN: {},
                Alarms: {
                  shape: 'S21'
                }
              }
            }
          },
          PutScheduledAction: {
            input: {
              type: 'structure',
              required: ['ServiceNamespace', 'ScheduledActionName', 'ResourceId', 'ScalableDimension'],
              members: {
                ServiceNamespace: {},
                Schedule: {},
                Timezone: {},
                ScheduledActionName: {},
                ResourceId: {},
                ScalableDimension: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                ScalableTargetAction: {
                  shape: 'S28'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RegisterScalableTarget: {
            input: {
              type: 'structure',
              required: ['ServiceNamespace', 'ResourceId', 'ScalableDimension'],
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
                RoleARN: {},
                SuspendedState: {
                  shape: 'Sj'
                },
                Tags: {
                  shape: 'S2c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ScalableTargetARN: {}
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
                  shape: 'S2c'
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
          }
        },
        shapes: {
          Sb: {
            type: 'list',
            member: {}
          },
          Sj: {
            type: 'structure',
            members: {
              DynamicScalingInSuspended: {
                type: 'boolean'
              },
              DynamicScalingOutSuspended: {
                type: 'boolean'
              },
              ScheduledScalingSuspended: {
                type: 'boolean'
              }
            }
          },
          S10: {
            type: 'structure',
            members: {
              AdjustmentType: {},
              StepAdjustments: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ScalingAdjustment'],
                  members: {
                    MetricIntervalLowerBound: {
                      type: 'double'
                    },
                    MetricIntervalUpperBound: {
                      type: 'double'
                    },
                    ScalingAdjustment: {
                      type: 'integer'
                    }
                  }
                }
              },
              MinAdjustmentMagnitude: {
                type: 'integer'
              },
              Cooldown: {
                type: 'integer'
              },
              MetricAggregationType: {}
            }
          },
          S19: {
            type: 'structure',
            required: ['TargetValue'],
            members: {
              TargetValue: {
                type: 'double'
              },
              PredefinedMetricSpecification: {
                type: 'structure',
                required: ['PredefinedMetricType'],
                members: {
                  PredefinedMetricType: {},
                  ResourceLabel: {}
                }
              },
              CustomizedMetricSpecification: {
                type: 'structure',
                members: {
                  MetricName: {},
                  Namespace: {},
                  Dimensions: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['Name', 'Value'],
                      members: {
                        Name: {},
                        Value: {}
                      }
                    }
                  },
                  Statistic: {},
                  Unit: {},
                  Metrics: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['Id'],
                      members: {
                        Expression: {},
                        Id: {},
                        Label: {},
                        MetricStat: {
                          type: 'structure',
                          required: ['Metric', 'Stat'],
                          members: {
                            Metric: {
                              type: 'structure',
                              members: {
                                Dimensions: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    required: ['Name', 'Value'],
                                    members: {
                                      Name: {},
                                      Value: {}
                                    }
                                  }
                                },
                                MetricName: {},
                                Namespace: {}
                              }
                            },
                            Stat: {},
                            Unit: {}
                          }
                        },
                        ReturnData: {
                          type: 'boolean'
                        }
                      }
                    }
                  }
                }
              },
              ScaleOutCooldown: {
                type: 'integer'
              },
              ScaleInCooldown: {
                type: 'integer'
              },
              DisableScaleIn: {
                type: 'boolean'
              }
            }
          },
          S21: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AlarmName', 'AlarmARN'],
              members: {
                AlarmName: {},
                AlarmARN: {}
              }
            }
          },
          S28: {
            type: 'structure',
            members: {
              MinCapacity: {
                type: 'integer'
              },
              MaxCapacity: {
                type: 'integer'
              }
            }
          },
          S2c: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1e91a0908d7822442aa6b38932d0e44608225d6a.js.map