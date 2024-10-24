System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-06-30',
          endpointPrefix: 'scheduler',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon EventBridge Scheduler',
          serviceId: 'Scheduler',
          signatureVersion: 'v4',
          signingName: 'scheduler',
          uid: 'scheduler-2021-06-30'
        },
        operations: {
          CreateSchedule: {
            http: {
              requestUri: '/schedules/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FlexibleTimeWindow', 'Name', 'ScheduleExpression', 'Target'],
              members: {
                ActionAfterCompletion: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Description: {},
                EndDate: {
                  type: 'timestamp'
                },
                FlexibleTimeWindow: {
                  shape: 'S6'
                },
                GroupName: {},
                KmsKeyArn: {},
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                ScheduleExpression: {},
                ScheduleExpressionTimezone: {},
                StartDate: {
                  type: 'timestamp'
                },
                State: {},
                Target: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ScheduleArn'],
              members: {
                ScheduleArn: {}
              }
            },
            idempotent: true
          },
          CreateScheduleGroup: {
            http: {
              requestUri: '/schedule-groups/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                Tags: {
                  shape: 'S22'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ScheduleGroupArn'],
              members: {
                ScheduleGroupArn: {}
              }
            },
            idempotent: true
          },
          DeleteSchedule: {
            http: {
              method: 'DELETE',
              requestUri: '/schedules/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                ClientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                GroupName: {
                  location: 'querystring',
                  locationName: 'groupName'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteScheduleGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/schedule-groups/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                ClientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetSchedule: {
            http: {
              method: 'GET',
              requestUri: '/schedules/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                GroupName: {
                  location: 'querystring',
                  locationName: 'groupName'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ActionAfterCompletion: {},
                Arn: {},
                CreationDate: {
                  type: 'timestamp'
                },
                Description: {},
                EndDate: {
                  type: 'timestamp'
                },
                FlexibleTimeWindow: {
                  shape: 'S6'
                },
                GroupName: {},
                KmsKeyArn: {},
                LastModificationDate: {
                  type: 'timestamp'
                },
                Name: {},
                ScheduleExpression: {},
                ScheduleExpressionTimezone: {},
                StartDate: {
                  type: 'timestamp'
                },
                State: {},
                Target: {
                  shape: 'Sg'
                }
              }
            }
          },
          GetScheduleGroup: {
            http: {
              method: 'GET',
              requestUri: '/schedule-groups/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationDate: {
                  type: 'timestamp'
                },
                LastModificationDate: {
                  type: 'timestamp'
                },
                Name: {},
                State: {}
              }
            }
          },
          ListScheduleGroups: {
            http: {
              method: 'GET',
              requestUri: '/schedule-groups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NamePrefix: {
                  location: 'querystring',
                  locationName: 'NamePrefix'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ScheduleGroups'],
              members: {
                NextToken: {},
                ScheduleGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      LastModificationDate: {
                        type: 'timestamp'
                      },
                      Name: {},
                      State: {}
                    }
                  }
                }
              }
            }
          },
          ListSchedules: {
            http: {
              method: 'GET',
              requestUri: '/schedules',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupName: {
                  location: 'querystring',
                  locationName: 'ScheduleGroup'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NamePrefix: {
                  location: 'querystring',
                  locationName: 'NamePrefix'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                State: {
                  location: 'querystring',
                  locationName: 'State'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Schedules'],
              members: {
                NextToken: {},
                Schedules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      GroupName: {},
                      LastModificationDate: {
                        type: 'timestamp'
                      },
                      Name: {},
                      State: {},
                      Target: {
                        type: 'structure',
                        required: ['Arn'],
                        members: {
                          Arn: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S22'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                Tags: {
                  shape: 'S22'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'TagKeys',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateSchedule: {
            http: {
              method: 'PUT',
              requestUri: '/schedules/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FlexibleTimeWindow', 'Name', 'ScheduleExpression', 'Target'],
              members: {
                ActionAfterCompletion: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Description: {},
                EndDate: {
                  type: 'timestamp'
                },
                FlexibleTimeWindow: {
                  shape: 'S6'
                },
                GroupName: {},
                KmsKeyArn: {},
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                ScheduleExpression: {},
                ScheduleExpressionTimezone: {},
                StartDate: {
                  type: 'timestamp'
                },
                State: {},
                Target: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ScheduleArn'],
              members: {
                ScheduleArn: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S6: {
            type: 'structure',
            required: ['Mode'],
            members: {
              MaximumWindowInMinutes: {
                type: 'integer'
              },
              Mode: {}
            }
          },
          Sg: {
            type: 'structure',
            required: ['Arn', 'RoleArn'],
            members: {
              Arn: {},
              DeadLetterConfig: {
                type: 'structure',
                members: {
                  Arn: {}
                }
              },
              EcsParameters: {
                type: 'structure',
                required: ['TaskDefinitionArn'],
                members: {
                  CapacityProviderStrategy: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['capacityProvider'],
                      members: {
                        base: {
                          type: 'integer'
                        },
                        capacityProvider: {},
                        weight: {
                          type: 'integer'
                        }
                      }
                    }
                  },
                  EnableECSManagedTags: {
                    type: 'boolean'
                  },
                  EnableExecuteCommand: {
                    type: 'boolean'
                  },
                  Group: {},
                  LaunchType: {},
                  NetworkConfiguration: {
                    type: 'structure',
                    members: {
                      awsvpcConfiguration: {
                        type: 'structure',
                        required: ['Subnets'],
                        members: {
                          AssignPublicIp: {},
                          SecurityGroups: {
                            type: 'list',
                            member: {}
                          },
                          Subnets: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    }
                  },
                  PlacementConstraints: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        expression: {},
                        type: {}
                      }
                    }
                  },
                  PlacementStrategy: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        field: {},
                        type: {}
                      }
                    }
                  },
                  PlatformVersion: {},
                  PropagateTags: {},
                  ReferenceId: {},
                  Tags: {
                    type: 'list',
                    member: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  },
                  TaskCount: {
                    type: 'integer'
                  },
                  TaskDefinitionArn: {}
                }
              },
              EventBridgeParameters: {
                type: 'structure',
                required: ['DetailType', 'Source'],
                members: {
                  DetailType: {},
                  Source: {}
                }
              },
              Input: {},
              KinesisParameters: {
                type: 'structure',
                required: ['PartitionKey'],
                members: {
                  PartitionKey: {}
                }
              },
              RetryPolicy: {
                type: 'structure',
                members: {
                  MaximumEventAgeInSeconds: {
                    type: 'integer'
                  },
                  MaximumRetryAttempts: {
                    type: 'integer'
                  }
                }
              },
              RoleArn: {},
              SageMakerPipelineParameters: {
                type: 'structure',
                members: {
                  PipelineParameterList: {
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
              },
              SqsParameters: {
                type: 'structure',
                members: {
                  MessageGroupId: {}
                }
              }
            }
          },
          S22: {
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
//# sourceMappingURL=12f4c90dc8a7b4aad3b92db7865bcb6ded7af9d6.js.map