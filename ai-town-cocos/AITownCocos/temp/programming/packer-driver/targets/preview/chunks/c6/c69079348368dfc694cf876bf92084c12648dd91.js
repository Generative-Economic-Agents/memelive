System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-10-07',
          endpointPrefix: 'events',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon CloudWatch Events',
          serviceId: 'CloudWatch Events',
          signatureVersion: 'v4',
          targetPrefix: 'AWSEvents',
          uid: 'events-2015-10-07'
        },
        operations: {
          ActivateEventSource: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          CancelReplay: {
            input: {
              type: 'structure',
              required: ['ReplayName'],
              members: {
                ReplayName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplayArn: {},
                State: {},
                StateReason: {}
              }
            }
          },
          CreateApiDestination: {
            input: {
              type: 'structure',
              required: ['Name', 'ConnectionArn', 'InvocationEndpoint', 'HttpMethod'],
              members: {
                Name: {},
                Description: {},
                ConnectionArn: {},
                InvocationEndpoint: {},
                HttpMethod: {},
                InvocationRateLimitPerSecond: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApiDestinationArn: {},
                ApiDestinationState: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateArchive: {
            input: {
              type: 'structure',
              required: ['ArchiveName', 'EventSourceArn'],
              members: {
                ArchiveName: {},
                EventSourceArn: {},
                Description: {},
                EventPattern: {},
                RetentionDays: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ArchiveArn: {},
                State: {},
                StateReason: {},
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateConnection: {
            input: {
              type: 'structure',
              required: ['Name', 'AuthorizationType', 'AuthParameters'],
              members: {
                Name: {},
                Description: {},
                AuthorizationType: {},
                AuthParameters: {
                  type: 'structure',
                  members: {
                    BasicAuthParameters: {
                      type: 'structure',
                      required: ['Username', 'Password'],
                      members: {
                        Username: {},
                        Password: {
                          shape: 'S11'
                        }
                      }
                    },
                    OAuthParameters: {
                      type: 'structure',
                      required: ['ClientParameters', 'AuthorizationEndpoint', 'HttpMethod'],
                      members: {
                        ClientParameters: {
                          type: 'structure',
                          required: ['ClientID', 'ClientSecret'],
                          members: {
                            ClientID: {},
                            ClientSecret: {
                              shape: 'S11'
                            }
                          }
                        },
                        AuthorizationEndpoint: {},
                        HttpMethod: {},
                        OAuthHttpParameters: {
                          shape: 'S15'
                        }
                      }
                    },
                    ApiKeyAuthParameters: {
                      type: 'structure',
                      required: ['ApiKeyName', 'ApiKeyValue'],
                      members: {
                        ApiKeyName: {},
                        ApiKeyValue: {
                          shape: 'S11'
                        }
                      }
                    },
                    InvocationHttpParameters: {
                      shape: 'S15'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectionArn: {},
                ConnectionState: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateEventBus: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                EventSourceName: {},
                Tags: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventBusArn: {}
              }
            }
          },
          CreatePartnerEventSource: {
            input: {
              type: 'structure',
              required: ['Name', 'Account'],
              members: {
                Name: {},
                Account: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EventSourceArn: {}
              }
            }
          },
          DeactivateEventSource: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          DeauthorizeConnection: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectionArn: {},
                ConnectionState: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastAuthorizedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteApiDestination: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteArchive: {
            input: {
              type: 'structure',
              required: ['ArchiveName'],
              members: {
                ArchiveName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteConnection: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectionArn: {},
                ConnectionState: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastAuthorizedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteEventBus: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          DeletePartnerEventSource: {
            input: {
              type: 'structure',
              required: ['Name', 'Account'],
              members: {
                Name: {},
                Account: {}
              }
            }
          },
          DeleteRule: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                EventBusName: {},
                Force: {
                  type: 'boolean'
                }
              }
            }
          },
          DescribeApiDestination: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApiDestinationArn: {},
                Name: {},
                Description: {},
                ApiDestinationState: {},
                ConnectionArn: {},
                InvocationEndpoint: {},
                HttpMethod: {},
                InvocationRateLimitPerSecond: {
                  type: 'integer'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeArchive: {
            input: {
              type: 'structure',
              required: ['ArchiveName'],
              members: {
                ArchiveName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ArchiveArn: {},
                ArchiveName: {},
                EventSourceArn: {},
                Description: {},
                EventPattern: {},
                State: {},
                StateReason: {},
                RetentionDays: {
                  type: 'integer'
                },
                SizeBytes: {
                  type: 'long'
                },
                EventCount: {
                  type: 'long'
                },
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeConnection: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectionArn: {},
                Name: {},
                Description: {},
                ConnectionState: {},
                StateReason: {},
                AuthorizationType: {},
                SecretArn: {},
                AuthParameters: {
                  type: 'structure',
                  members: {
                    BasicAuthParameters: {
                      type: 'structure',
                      members: {
                        Username: {}
                      }
                    },
                    OAuthParameters: {
                      type: 'structure',
                      members: {
                        ClientParameters: {
                          type: 'structure',
                          members: {
                            ClientID: {}
                          }
                        },
                        AuthorizationEndpoint: {},
                        HttpMethod: {},
                        OAuthHttpParameters: {
                          shape: 'S15'
                        }
                      }
                    },
                    ApiKeyAuthParameters: {
                      type: 'structure',
                      members: {
                        ApiKeyName: {}
                      }
                    },
                    InvocationHttpParameters: {
                      shape: 'S15'
                    }
                  }
                },
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastAuthorizedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeEventBus: {
            input: {
              type: 'structure',
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Arn: {},
                Policy: {}
              }
            }
          },
          DescribeEventSource: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreatedBy: {},
                CreationTime: {
                  type: 'timestamp'
                },
                ExpirationTime: {
                  type: 'timestamp'
                },
                Name: {},
                State: {}
              }
            }
          },
          DescribePartnerEventSource: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Name: {}
              }
            }
          },
          DescribeReplay: {
            input: {
              type: 'structure',
              required: ['ReplayName'],
              members: {
                ReplayName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplayName: {},
                ReplayArn: {},
                Description: {},
                State: {},
                StateReason: {},
                EventSourceArn: {},
                Destination: {
                  shape: 'S2y'
                },
                EventStartTime: {
                  type: 'timestamp'
                },
                EventEndTime: {
                  type: 'timestamp'
                },
                EventLastReplayedTime: {
                  type: 'timestamp'
                },
                ReplayStartTime: {
                  type: 'timestamp'
                },
                ReplayEndTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeRule: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                EventBusName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Arn: {},
                EventPattern: {},
                ScheduleExpression: {},
                State: {},
                Description: {},
                RoleArn: {},
                ManagedBy: {},
                EventBusName: {},
                CreatedBy: {}
              }
            }
          },
          DisableRule: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                EventBusName: {}
              }
            }
          },
          EnableRule: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                EventBusName: {}
              }
            }
          },
          ListApiDestinations: {
            input: {
              type: 'structure',
              members: {
                NamePrefix: {},
                ConnectionArn: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApiDestinations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApiDestinationArn: {},
                      Name: {},
                      ApiDestinationState: {},
                      ConnectionArn: {},
                      InvocationEndpoint: {},
                      HttpMethod: {},
                      InvocationRateLimitPerSecond: {
                        type: 'integer'
                      },
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListArchives: {
            input: {
              type: 'structure',
              members: {
                NamePrefix: {},
                EventSourceArn: {},
                State: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Archives: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ArchiveName: {},
                      EventSourceArn: {},
                      State: {},
                      StateReason: {},
                      RetentionDays: {
                        type: 'integer'
                      },
                      SizeBytes: {
                        type: 'long'
                      },
                      EventCount: {
                        type: 'long'
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
          ListConnections: {
            input: {
              type: 'structure',
              members: {
                NamePrefix: {},
                ConnectionState: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Connections: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConnectionArn: {},
                      Name: {},
                      ConnectionState: {},
                      StateReason: {},
                      AuthorizationType: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastAuthorizedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEventBuses: {
            input: {
              type: 'structure',
              members: {
                NamePrefix: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventBuses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Arn: {},
                      Policy: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEventSources: {
            input: {
              type: 'structure',
              members: {
                NamePrefix: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventSources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CreatedBy: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      ExpirationTime: {
                        type: 'timestamp'
                      },
                      Name: {},
                      State: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPartnerEventSourceAccounts: {
            input: {
              type: 'structure',
              required: ['EventSourceName'],
              members: {
                EventSourceName: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PartnerEventSourceAccounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Account: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      ExpirationTime: {
                        type: 'timestamp'
                      },
                      State: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPartnerEventSources: {
            input: {
              type: 'structure',
              required: ['NamePrefix'],
              members: {
                NamePrefix: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PartnerEventSources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Name: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListReplays: {
            input: {
              type: 'structure',
              members: {
                NamePrefix: {},
                State: {},
                EventSourceArn: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Replays: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReplayName: {},
                      EventSourceArn: {},
                      State: {},
                      StateReason: {},
                      EventStartTime: {
                        type: 'timestamp'
                      },
                      EventEndTime: {
                        type: 'timestamp'
                      },
                      EventLastReplayedTime: {
                        type: 'timestamp'
                      },
                      ReplayStartTime: {
                        type: 'timestamp'
                      },
                      ReplayEndTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRuleNamesByTarget: {
            input: {
              type: 'structure',
              required: ['TargetArn'],
              members: {
                TargetArn: {},
                EventBusName: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RuleNames: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListRules: {
            input: {
              type: 'structure',
              members: {
                NamePrefix: {},
                EventBusName: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Rules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Arn: {},
                      EventPattern: {},
                      State: {},
                      Description: {},
                      ScheduleExpression: {},
                      RoleArn: {},
                      ManagedBy: {},
                      EventBusName: {}
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
                  shape: 'S1o'
                }
              }
            }
          },
          ListTargetsByRule: {
            input: {
              type: 'structure',
              required: ['Rule'],
              members: {
                Rule: {},
                EventBusName: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Targets: {
                  shape: 'S4n'
                },
                NextToken: {}
              }
            }
          },
          PutEvents: {
            input: {
              type: 'structure',
              required: ['Entries'],
              members: {
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Time: {
                        type: 'timestamp'
                      },
                      Source: {},
                      Resources: {
                        shape: 'S6n'
                      },
                      DetailType: {},
                      Detail: {},
                      EventBusName: {},
                      TraceHeader: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedEntryCount: {
                  type: 'integer'
                },
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EventId: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          PutPartnerEvents: {
            input: {
              type: 'structure',
              required: ['Entries'],
              members: {
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Time: {
                        type: 'timestamp'
                      },
                      Source: {},
                      Resources: {
                        shape: 'S6n'
                      },
                      DetailType: {},
                      Detail: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedEntryCount: {
                  type: 'integer'
                },
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EventId: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          PutPermission: {
            input: {
              type: 'structure',
              members: {
                EventBusName: {},
                Action: {},
                Principal: {},
                StatementId: {},
                Condition: {
                  type: 'structure',
                  required: ['Type', 'Key', 'Value'],
                  members: {
                    Type: {},
                    Key: {},
                    Value: {}
                  }
                },
                Policy: {}
              }
            }
          },
          PutRule: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                ScheduleExpression: {},
                EventPattern: {},
                State: {},
                Description: {},
                RoleArn: {},
                Tags: {
                  shape: 'S1o'
                },
                EventBusName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RuleArn: {}
              }
            }
          },
          PutTargets: {
            input: {
              type: 'structure',
              required: ['Rule', 'Targets'],
              members: {
                Rule: {},
                EventBusName: {},
                Targets: {
                  shape: 'S4n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedEntryCount: {
                  type: 'integer'
                },
                FailedEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TargetId: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          RemovePermission: {
            input: {
              type: 'structure',
              members: {
                StatementId: {},
                RemoveAllPermissions: {
                  type: 'boolean'
                },
                EventBusName: {}
              }
            }
          },
          RemoveTargets: {
            input: {
              type: 'structure',
              required: ['Rule', 'Ids'],
              members: {
                Rule: {},
                EventBusName: {},
                Ids: {
                  type: 'list',
                  member: {}
                },
                Force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedEntryCount: {
                  type: 'integer'
                },
                FailedEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TargetId: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          StartReplay: {
            input: {
              type: 'structure',
              required: ['ReplayName', 'EventSourceArn', 'EventStartTime', 'EventEndTime', 'Destination'],
              members: {
                ReplayName: {},
                Description: {},
                EventSourceArn: {},
                EventStartTime: {
                  type: 'timestamp'
                },
                EventEndTime: {
                  type: 'timestamp'
                },
                Destination: {
                  shape: 'S2y'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplayArn: {},
                State: {},
                StateReason: {},
                ReplayStartTime: {
                  type: 'timestamp'
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
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TestEventPattern: {
            input: {
              type: 'structure',
              required: ['EventPattern', 'Event'],
              members: {
                EventPattern: {},
                Event: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Result: {
                  type: 'boolean'
                }
              }
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
          UpdateApiDestination: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                ConnectionArn: {},
                InvocationEndpoint: {},
                HttpMethod: {},
                InvocationRateLimitPerSecond: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApiDestinationArn: {},
                ApiDestinationState: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          UpdateArchive: {
            input: {
              type: 'structure',
              required: ['ArchiveName'],
              members: {
                ArchiveName: {},
                Description: {},
                EventPattern: {},
                RetentionDays: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ArchiveArn: {},
                State: {},
                StateReason: {},
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          UpdateConnection: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                AuthorizationType: {},
                AuthParameters: {
                  type: 'structure',
                  members: {
                    BasicAuthParameters: {
                      type: 'structure',
                      members: {
                        Username: {},
                        Password: {
                          shape: 'S11'
                        }
                      }
                    },
                    OAuthParameters: {
                      type: 'structure',
                      members: {
                        ClientParameters: {
                          type: 'structure',
                          members: {
                            ClientID: {},
                            ClientSecret: {
                              shape: 'S11'
                            }
                          }
                        },
                        AuthorizationEndpoint: {},
                        HttpMethod: {},
                        OAuthHttpParameters: {
                          shape: 'S15'
                        }
                      }
                    },
                    ApiKeyAuthParameters: {
                      type: 'structure',
                      members: {
                        ApiKeyName: {},
                        ApiKeyValue: {
                          shape: 'S11'
                        }
                      }
                    },
                    InvocationHttpParameters: {
                      shape: 'S15'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectionArn: {},
                ConnectionState: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LastAuthorizedTime: {
                  type: 'timestamp'
                }
              }
            }
          }
        },
        shapes: {
          S11: {
            type: 'string',
            sensitive: true
          },
          S15: {
            type: 'structure',
            members: {
              HeaderParameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Key: {},
                    Value: {
                      type: 'string',
                      sensitive: true
                    },
                    IsValueSecret: {
                      type: 'boolean'
                    }
                  }
                }
              },
              QueryStringParameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Key: {},
                    Value: {
                      type: 'string',
                      sensitive: true
                    },
                    IsValueSecret: {
                      type: 'boolean'
                    }
                  }
                }
              },
              BodyParameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Key: {},
                    Value: {
                      type: 'string',
                      sensitive: true
                    },
                    IsValueSecret: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          S1o: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S2y: {
            type: 'structure',
            required: ['Arn'],
            members: {
              Arn: {},
              FilterArns: {
                type: 'list',
                member: {}
              }
            }
          },
          S4n: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Id', 'Arn'],
              members: {
                Id: {},
                Arn: {},
                RoleArn: {},
                Input: {},
                InputPath: {},
                InputTransformer: {
                  type: 'structure',
                  required: ['InputTemplate'],
                  members: {
                    InputPathsMap: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    InputTemplate: {}
                  }
                },
                KinesisParameters: {
                  type: 'structure',
                  required: ['PartitionKeyPath'],
                  members: {
                    PartitionKeyPath: {}
                  }
                },
                RunCommandParameters: {
                  type: 'structure',
                  required: ['RunCommandTargets'],
                  members: {
                    RunCommandTargets: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Key', 'Values'],
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
                EcsParameters: {
                  type: 'structure',
                  required: ['TaskDefinitionArn'],
                  members: {
                    TaskDefinitionArn: {},
                    TaskCount: {
                      type: 'integer'
                    },
                    LaunchType: {},
                    NetworkConfiguration: {
                      type: 'structure',
                      members: {
                        awsvpcConfiguration: {
                          type: 'structure',
                          required: ['Subnets'],
                          members: {
                            Subnets: {
                              shape: 'S59'
                            },
                            SecurityGroups: {
                              shape: 'S59'
                            },
                            AssignPublicIp: {}
                          }
                        }
                      }
                    },
                    PlatformVersion: {},
                    Group: {},
                    CapacityProviderStrategy: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['capacityProvider'],
                        members: {
                          capacityProvider: {},
                          weight: {
                            type: 'integer'
                          },
                          base: {
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
                    PlacementConstraints: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          type: {},
                          expression: {}
                        }
                      }
                    },
                    PlacementStrategy: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          type: {},
                          field: {}
                        }
                      }
                    },
                    PropagateTags: {},
                    ReferenceId: {},
                    Tags: {
                      shape: 'S1o'
                    }
                  }
                },
                BatchParameters: {
                  type: 'structure',
                  required: ['JobDefinition', 'JobName'],
                  members: {
                    JobDefinition: {},
                    JobName: {},
                    ArrayProperties: {
                      type: 'structure',
                      members: {
                        Size: {
                          type: 'integer'
                        }
                      }
                    },
                    RetryStrategy: {
                      type: 'structure',
                      members: {
                        Attempts: {
                          type: 'integer'
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
                },
                HttpParameters: {
                  type: 'structure',
                  members: {
                    PathParameterValues: {
                      type: 'list',
                      member: {}
                    },
                    HeaderParameters: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    QueryStringParameters: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                },
                RedshiftDataParameters: {
                  type: 'structure',
                  required: ['Database', 'Sql'],
                  members: {
                    SecretManagerArn: {},
                    Database: {},
                    DbUser: {},
                    Sql: {},
                    StatementName: {},
                    WithEvent: {
                      type: 'boolean'
                    }
                  }
                },
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
                DeadLetterConfig: {
                  type: 'structure',
                  members: {
                    Arn: {}
                  }
                },
                RetryPolicy: {
                  type: 'structure',
                  members: {
                    MaximumRetryAttempts: {
                      type: 'integer'
                    },
                    MaximumEventAgeInSeconds: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          S59: {
            type: 'list',
            member: {}
          },
          S6n: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c69079348368dfc694cf876bf92084c12648dd91.js.map