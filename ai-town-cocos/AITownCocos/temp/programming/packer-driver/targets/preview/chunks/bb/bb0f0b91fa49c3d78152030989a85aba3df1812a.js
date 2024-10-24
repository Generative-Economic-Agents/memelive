System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-10-07',
          endpointPrefix: 'pipes',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'Amazon EventBridge Pipes',
          serviceId: 'Pipes',
          signatureVersion: 'v4',
          signingName: 'pipes',
          uid: 'pipes-2015-10-07'
        },
        operations: {
          CreatePipe: {
            http: {
              requestUri: '/v1/pipes/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'Source', 'Target', 'RoleArn'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                Description: {
                  shape: 'S3'
                },
                DesiredState: {},
                Source: {},
                SourceParameters: {
                  shape: 'S6'
                },
                Enrichment: {},
                EnrichmentParameters: {
                  shape: 'S1a'
                },
                Target: {},
                TargetParameters: {
                  shape: 'S1l'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S4u'
                },
                LogConfiguration: {
                  shape: 'S4v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Name: {},
                DesiredState: {},
                CurrentState: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          DeletePipe: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/pipes/{Name}',
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
                Name: {},
                DesiredState: {},
                CurrentState: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          DescribePipe: {
            http: {
              method: 'GET',
              requestUri: '/v1/pipes/{Name}',
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
                Name: {},
                Description: {
                  shape: 'S3'
                },
                DesiredState: {},
                CurrentState: {},
                StateReason: {},
                Source: {},
                SourceParameters: {
                  shape: 'S6'
                },
                Enrichment: {},
                EnrichmentParameters: {
                  shape: 'S1a'
                },
                Target: {},
                TargetParameters: {
                  shape: 'S1l'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S4u'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                LogConfiguration: {
                  type: 'structure',
                  members: {
                    S3LogDestination: {
                      type: 'structure',
                      members: {
                        BucketName: {},
                        Prefix: {},
                        BucketOwner: {},
                        OutputFormat: {}
                      }
                    },
                    FirehoseLogDestination: {
                      type: 'structure',
                      members: {
                        DeliveryStreamArn: {}
                      }
                    },
                    CloudwatchLogsLogDestination: {
                      type: 'structure',
                      members: {
                        LogGroupArn: {}
                      }
                    },
                    Level: {},
                    IncludeExecutionData: {
                      shape: 'S56'
                    }
                  }
                }
              }
            }
          },
          ListPipes: {
            http: {
              method: 'GET',
              requestUri: '/v1/pipes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NamePrefix: {
                  location: 'querystring',
                  locationName: 'NamePrefix'
                },
                DesiredState: {
                  location: 'querystring',
                  locationName: 'DesiredState'
                },
                CurrentState: {
                  location: 'querystring',
                  locationName: 'CurrentState'
                },
                SourcePrefix: {
                  location: 'querystring',
                  locationName: 'SourcePrefix'
                },
                TargetPrefix: {
                  location: 'querystring',
                  locationName: 'TargetPrefix'
                },
                NextToken: {
                  shape: 'S5n',
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                Limit: {
                  location: 'querystring',
                  locationName: 'Limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Pipes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Arn: {},
                      DesiredState: {},
                      CurrentState: {},
                      StateReason: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      Source: {},
                      Target: {},
                      Enrichment: {}
                    }
                  }
                },
                NextToken: {
                  shape: 'S5n'
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S4u'
                }
              }
            }
          },
          StartPipe: {
            http: {
              requestUri: '/v1/pipes/{Name}/start',
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
                Name: {},
                DesiredState: {},
                CurrentState: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          StopPipe: {
            http: {
              requestUri: '/v1/pipes/{Name}/stop',
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
                Name: {},
                DesiredState: {},
                CurrentState: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'S4u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
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
          UpdatePipe: {
            http: {
              method: 'PUT',
              requestUri: '/v1/pipes/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'RoleArn'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                Description: {
                  shape: 'S3'
                },
                DesiredState: {},
                SourceParameters: {
                  type: 'structure',
                  members: {
                    FilterCriteria: {
                      shape: 'S7'
                    },
                    KinesisStreamParameters: {
                      type: 'structure',
                      members: {
                        BatchSize: {
                          type: 'integer'
                        },
                        DeadLetterConfig: {
                          shape: 'Sd'
                        },
                        OnPartialBatchItemFailure: {},
                        MaximumBatchingWindowInSeconds: {
                          type: 'integer'
                        },
                        MaximumRecordAgeInSeconds: {
                          type: 'integer'
                        },
                        MaximumRetryAttempts: {
                          type: 'integer'
                        },
                        ParallelizationFactor: {
                          type: 'integer'
                        }
                      }
                    },
                    DynamoDBStreamParameters: {
                      type: 'structure',
                      members: {
                        BatchSize: {
                          type: 'integer'
                        },
                        DeadLetterConfig: {
                          shape: 'Sd'
                        },
                        OnPartialBatchItemFailure: {},
                        MaximumBatchingWindowInSeconds: {
                          type: 'integer'
                        },
                        MaximumRecordAgeInSeconds: {
                          type: 'integer'
                        },
                        MaximumRetryAttempts: {
                          type: 'integer'
                        },
                        ParallelizationFactor: {
                          type: 'integer'
                        }
                      }
                    },
                    SqsQueueParameters: {
                      type: 'structure',
                      members: {
                        BatchSize: {
                          type: 'integer'
                        },
                        MaximumBatchingWindowInSeconds: {
                          type: 'integer'
                        }
                      }
                    },
                    ActiveMQBrokerParameters: {
                      type: 'structure',
                      required: ['Credentials'],
                      members: {
                        Credentials: {
                          shape: 'Sq'
                        },
                        BatchSize: {
                          type: 'integer'
                        },
                        MaximumBatchingWindowInSeconds: {
                          type: 'integer'
                        }
                      }
                    },
                    RabbitMQBrokerParameters: {
                      type: 'structure',
                      required: ['Credentials'],
                      members: {
                        Credentials: {
                          shape: 'Sq'
                        },
                        BatchSize: {
                          type: 'integer'
                        },
                        MaximumBatchingWindowInSeconds: {
                          type: 'integer'
                        }
                      }
                    },
                    ManagedStreamingKafkaParameters: {
                      type: 'structure',
                      members: {
                        BatchSize: {
                          type: 'integer'
                        },
                        Credentials: {
                          shape: 'Sy'
                        },
                        MaximumBatchingWindowInSeconds: {
                          type: 'integer'
                        }
                      }
                    },
                    SelfManagedKafkaParameters: {
                      type: 'structure',
                      members: {
                        BatchSize: {
                          type: 'integer'
                        },
                        MaximumBatchingWindowInSeconds: {
                          type: 'integer'
                        },
                        Credentials: {
                          shape: 'S13'
                        },
                        ServerRootCaCertificate: {},
                        Vpc: {
                          shape: 'S14'
                        }
                      }
                    }
                  }
                },
                Enrichment: {},
                EnrichmentParameters: {
                  shape: 'S1a'
                },
                Target: {},
                TargetParameters: {
                  shape: 'S1l'
                },
                RoleArn: {},
                LogConfiguration: {
                  shape: 'S4v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Name: {},
                DesiredState: {},
                CurrentState: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S3: {
            type: 'string',
            sensitive: true
          },
          S6: {
            type: 'structure',
            members: {
              FilterCriteria: {
                shape: 'S7'
              },
              KinesisStreamParameters: {
                type: 'structure',
                required: ['StartingPosition'],
                members: {
                  BatchSize: {
                    type: 'integer'
                  },
                  DeadLetterConfig: {
                    shape: 'Sd'
                  },
                  OnPartialBatchItemFailure: {},
                  MaximumBatchingWindowInSeconds: {
                    type: 'integer'
                  },
                  MaximumRecordAgeInSeconds: {
                    type: 'integer'
                  },
                  MaximumRetryAttempts: {
                    type: 'integer'
                  },
                  ParallelizationFactor: {
                    type: 'integer'
                  },
                  StartingPosition: {},
                  StartingPositionTimestamp: {
                    type: 'timestamp'
                  }
                }
              },
              DynamoDBStreamParameters: {
                type: 'structure',
                required: ['StartingPosition'],
                members: {
                  BatchSize: {
                    type: 'integer'
                  },
                  DeadLetterConfig: {
                    shape: 'Sd'
                  },
                  OnPartialBatchItemFailure: {},
                  MaximumBatchingWindowInSeconds: {
                    type: 'integer'
                  },
                  MaximumRecordAgeInSeconds: {
                    type: 'integer'
                  },
                  MaximumRetryAttempts: {
                    type: 'integer'
                  },
                  ParallelizationFactor: {
                    type: 'integer'
                  },
                  StartingPosition: {}
                }
              },
              SqsQueueParameters: {
                type: 'structure',
                members: {
                  BatchSize: {
                    type: 'integer'
                  },
                  MaximumBatchingWindowInSeconds: {
                    type: 'integer'
                  }
                }
              },
              ActiveMQBrokerParameters: {
                type: 'structure',
                required: ['Credentials', 'QueueName'],
                members: {
                  Credentials: {
                    shape: 'Sq'
                  },
                  QueueName: {
                    shape: 'Ss'
                  },
                  BatchSize: {
                    type: 'integer'
                  },
                  MaximumBatchingWindowInSeconds: {
                    type: 'integer'
                  }
                }
              },
              RabbitMQBrokerParameters: {
                type: 'structure',
                required: ['Credentials', 'QueueName'],
                members: {
                  Credentials: {
                    shape: 'Sq'
                  },
                  QueueName: {
                    shape: 'Ss'
                  },
                  VirtualHost: {
                    shape: 'Su'
                  },
                  BatchSize: {
                    type: 'integer'
                  },
                  MaximumBatchingWindowInSeconds: {
                    type: 'integer'
                  }
                }
              },
              ManagedStreamingKafkaParameters: {
                type: 'structure',
                required: ['TopicName'],
                members: {
                  TopicName: {
                    shape: 'Sw'
                  },
                  StartingPosition: {},
                  BatchSize: {
                    type: 'integer'
                  },
                  MaximumBatchingWindowInSeconds: {
                    type: 'integer'
                  },
                  ConsumerGroupID: {
                    shape: 'Su'
                  },
                  Credentials: {
                    shape: 'Sy'
                  }
                }
              },
              SelfManagedKafkaParameters: {
                type: 'structure',
                required: ['TopicName'],
                members: {
                  TopicName: {
                    shape: 'Sw'
                  },
                  StartingPosition: {},
                  AdditionalBootstrapServers: {
                    type: 'list',
                    member: {
                      type: 'string',
                      sensitive: true
                    }
                  },
                  BatchSize: {
                    type: 'integer'
                  },
                  MaximumBatchingWindowInSeconds: {
                    type: 'integer'
                  },
                  ConsumerGroupID: {
                    shape: 'Su'
                  },
                  Credentials: {
                    shape: 'S13'
                  },
                  ServerRootCaCertificate: {},
                  Vpc: {
                    shape: 'S14'
                  }
                }
              }
            }
          },
          S7: {
            type: 'structure',
            members: {
              Filters: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Pattern: {
                      type: 'string',
                      sensitive: true
                    }
                  }
                }
              }
            }
          },
          Sd: {
            type: 'structure',
            members: {
              Arn: {}
            }
          },
          Sq: {
            type: 'structure',
            members: {
              BasicAuth: {}
            },
            union: true
          },
          Ss: {
            type: 'string',
            sensitive: true
          },
          Su: {
            type: 'string',
            sensitive: true
          },
          Sw: {
            type: 'string',
            sensitive: true
          },
          Sy: {
            type: 'structure',
            members: {
              SaslScram512Auth: {},
              ClientCertificateTlsAuth: {}
            },
            union: true
          },
          S13: {
            type: 'structure',
            members: {
              BasicAuth: {},
              SaslScram512Auth: {},
              SaslScram256Auth: {},
              ClientCertificateTlsAuth: {}
            },
            union: true
          },
          S14: {
            type: 'structure',
            members: {
              Subnets: {
                type: 'list',
                member: {
                  type: 'string',
                  sensitive: true
                }
              },
              SecurityGroup: {
                type: 'list',
                member: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S1a: {
            type: 'structure',
            members: {
              InputTemplate: {
                shape: 'S1b'
              },
              HttpParameters: {
                type: 'structure',
                members: {
                  PathParameterValues: {
                    shape: 'S1d'
                  },
                  HeaderParameters: {
                    shape: 'S1f'
                  },
                  QueryStringParameters: {
                    shape: 'S1i'
                  }
                }
              }
            }
          },
          S1b: {
            type: 'string',
            sensitive: true
          },
          S1d: {
            type: 'list',
            member: {
              type: 'string',
              sensitive: true
            }
          },
          S1f: {
            type: 'map',
            key: {},
            value: {
              type: 'string',
              sensitive: true
            }
          },
          S1i: {
            type: 'map',
            key: {},
            value: {
              type: 'string',
              sensitive: true
            }
          },
          S1l: {
            type: 'structure',
            members: {
              InputTemplate: {
                shape: 'S1b'
              },
              LambdaFunctionParameters: {
                type: 'structure',
                members: {
                  InvocationType: {}
                }
              },
              StepFunctionStateMachineParameters: {
                type: 'structure',
                members: {
                  InvocationType: {}
                }
              },
              KinesisStreamParameters: {
                type: 'structure',
                required: ['PartitionKey'],
                members: {
                  PartitionKey: {
                    type: 'string',
                    sensitive: true
                  }
                }
              },
              EcsTaskParameters: {
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
                            type: 'list',
                            member: {
                              type: 'string',
                              sensitive: true
                            }
                          },
                          SecurityGroups: {
                            type: 'list',
                            member: {
                              type: 'string',
                              sensitive: true
                            }
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
                        capacityProvider: {
                          type: 'string',
                          sensitive: true
                        },
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
                        expression: {
                          type: 'string',
                          sensitive: true
                        }
                      }
                    }
                  },
                  PlacementStrategy: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        type: {},
                        field: {
                          type: 'string',
                          sensitive: true
                        }
                      }
                    }
                  },
                  PropagateTags: {},
                  ReferenceId: {
                    type: 'string',
                    sensitive: true
                  },
                  Overrides: {
                    type: 'structure',
                    members: {
                      ContainerOverrides: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Command: {
                              shape: 'S2m'
                            },
                            Cpu: {
                              type: 'integer'
                            },
                            Environment: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  name: {},
                                  value: {}
                                }
                              }
                            },
                            EnvironmentFiles: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                required: ['type', 'value'],
                                members: {
                                  type: {},
                                  value: {}
                                }
                              }
                            },
                            Memory: {
                              type: 'integer'
                            },
                            MemoryReservation: {
                              type: 'integer'
                            },
                            Name: {},
                            ResourceRequirements: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                required: ['type', 'value'],
                                members: {
                                  type: {},
                                  value: {}
                                }
                              }
                            }
                          }
                        }
                      },
                      Cpu: {},
                      EphemeralStorage: {
                        type: 'structure',
                        required: ['sizeInGiB'],
                        members: {
                          sizeInGiB: {
                            type: 'integer'
                          }
                        }
                      },
                      ExecutionRoleArn: {},
                      InferenceAcceleratorOverrides: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            deviceName: {},
                            deviceType: {}
                          }
                        }
                      },
                      Memory: {},
                      TaskRoleArn: {}
                    }
                  },
                  Tags: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['Key', 'Value'],
                      members: {
                        Key: {},
                        Value: {
                          shape: 'S33'
                        }
                      }
                    }
                  }
                }
              },
              BatchJobParameters: {
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
                  },
                  ContainerOverrides: {
                    type: 'structure',
                    members: {
                      Command: {
                        shape: 'S2m'
                      },
                      Environment: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {},
                            Value: {}
                          }
                        }
                      },
                      InstanceType: {},
                      ResourceRequirements: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['Type', 'Value'],
                          members: {
                            Type: {},
                            Value: {}
                          }
                        }
                      }
                    }
                  },
                  DependsOn: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        JobId: {},
                        Type: {}
                      }
                    }
                  },
                  Parameters: {
                    type: 'map',
                    key: {},
                    value: {}
                  }
                }
              },
              SqsQueueParameters: {
                type: 'structure',
                members: {
                  MessageGroupId: {
                    type: 'string',
                    sensitive: true
                  },
                  MessageDeduplicationId: {
                    type: 'string',
                    sensitive: true
                  }
                }
              },
              HttpParameters: {
                type: 'structure',
                members: {
                  PathParameterValues: {
                    shape: 'S1d'
                  },
                  HeaderParameters: {
                    shape: 'S1f'
                  },
                  QueryStringParameters: {
                    shape: 'S1i'
                  }
                }
              },
              RedshiftDataParameters: {
                type: 'structure',
                required: ['Database', 'Sqls'],
                members: {
                  SecretManagerArn: {},
                  Database: {
                    type: 'string',
                    sensitive: true
                  },
                  DbUser: {
                    type: 'string',
                    sensitive: true
                  },
                  StatementName: {
                    type: 'string',
                    sensitive: true
                  },
                  WithEvent: {
                    type: 'boolean'
                  },
                  Sqls: {
                    type: 'list',
                    member: {
                      type: 'string',
                      sensitive: true
                    }
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
                        Name: {
                          type: 'string',
                          sensitive: true
                        },
                        Value: {
                          type: 'string',
                          sensitive: true
                        }
                      }
                    }
                  }
                }
              },
              EventBridgeEventBusParameters: {
                type: 'structure',
                members: {
                  EndpointId: {
                    type: 'string',
                    sensitive: true
                  },
                  DetailType: {
                    type: 'string',
                    sensitive: true
                  },
                  Source: {
                    type: 'string',
                    sensitive: true
                  },
                  Resources: {
                    type: 'list',
                    member: {}
                  },
                  Time: {}
                }
              },
              CloudWatchLogsParameters: {
                type: 'structure',
                members: {
                  LogStreamName: {},
                  Timestamp: {}
                }
              },
              TimestreamParameters: {
                type: 'structure',
                required: ['TimeValue', 'VersionValue', 'DimensionMappings'],
                members: {
                  TimeValue: {},
                  EpochTimeUnit: {},
                  TimeFieldType: {},
                  TimestampFormat: {},
                  VersionValue: {},
                  DimensionMappings: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['DimensionValue', 'DimensionValueType', 'DimensionName'],
                      members: {
                        DimensionValue: {},
                        DimensionValueType: {},
                        DimensionName: {}
                      }
                    }
                  },
                  SingleMeasureMappings: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['MeasureValue', 'MeasureValueType', 'MeasureName'],
                      members: {
                        MeasureValue: {},
                        MeasureValueType: {},
                        MeasureName: {}
                      }
                    }
                  },
                  MultiMeasureMappings: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['MultiMeasureName', 'MultiMeasureAttributeMappings'],
                      members: {
                        MultiMeasureName: {},
                        MultiMeasureAttributeMappings: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['MeasureValue', 'MeasureValueType', 'MultiMeasureAttributeName'],
                            members: {
                              MeasureValue: {},
                              MeasureValueType: {},
                              MultiMeasureAttributeName: {}
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S2m: {
            type: 'list',
            member: {}
          },
          S33: {
            type: 'string',
            sensitive: true
          },
          S4u: {
            type: 'map',
            key: {},
            value: {
              shape: 'S33'
            }
          },
          S4v: {
            type: 'structure',
            required: ['Level'],
            members: {
              S3LogDestination: {
                type: 'structure',
                required: ['BucketName', 'BucketOwner'],
                members: {
                  BucketName: {},
                  BucketOwner: {},
                  OutputFormat: {},
                  Prefix: {}
                }
              },
              FirehoseLogDestination: {
                type: 'structure',
                required: ['DeliveryStreamArn'],
                members: {
                  DeliveryStreamArn: {}
                }
              },
              CloudwatchLogsLogDestination: {
                type: 'structure',
                required: ['LogGroupArn'],
                members: {
                  LogGroupArn: {}
                }
              },
              Level: {},
              IncludeExecutionData: {
                shape: 'S56'
              }
            }
          },
          S56: {
            type: 'list',
            member: {}
          },
          S5n: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=bb0f0b91fa49c3d78152030989a85aba3df1812a.js.map