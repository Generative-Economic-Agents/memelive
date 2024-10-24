System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2013-12-02',
          endpointPrefix: 'kinesis',
          jsonVersion: '1.1',
          protocol: 'json',
          protocolSettings: {
            h2: 'eventstream'
          },
          serviceAbbreviation: 'Kinesis',
          serviceFullName: 'Amazon Kinesis',
          serviceId: 'Kinesis',
          signatureVersion: 'v4',
          targetPrefix: 'Kinesis_20131202',
          uid: 'kinesis-2013-12-02'
        },
        operations: {
          AddTagsToStream: {
            input: {
              type: 'structure',
              required: ['Tags'],
              members: {
                StreamName: {},
                Tags: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          CreateStream: {
            input: {
              type: 'structure',
              required: ['StreamName'],
              members: {
                StreamName: {},
                ShardCount: {
                  type: 'integer'
                },
                StreamModeDetails: {
                  shape: 'S9'
                }
              }
            }
          },
          DecreaseStreamRetentionPeriod: {
            input: {
              type: 'structure',
              required: ['RetentionPeriodHours'],
              members: {
                StreamName: {},
                RetentionPeriodHours: {
                  type: 'integer'
                },
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {
                  contextParam: {
                    name: 'ResourceARN'
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          DeleteStream: {
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                EnforceConsumerDeletion: {
                  type: 'boolean'
                },
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          DeregisterStreamConsumer: {
            input: {
              type: 'structure',
              members: {
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                },
                ConsumerName: {},
                ConsumerARN: {
                  contextParam: {
                    name: 'ConsumerARN'
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          DescribeLimits: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['ShardLimit', 'OpenShardCount', 'OnDemandStreamCount', 'OnDemandStreamCountLimit'],
              members: {
                ShardLimit: {
                  type: 'integer'
                },
                OpenShardCount: {
                  type: 'integer'
                },
                OnDemandStreamCount: {
                  type: 'integer'
                },
                OnDemandStreamCountLimit: {
                  type: 'integer'
                }
              }
            }
          },
          DescribeStream: {
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                Limit: {
                  type: 'integer'
                },
                ExclusiveStartShardId: {},
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['StreamDescription'],
              members: {
                StreamDescription: {
                  type: 'structure',
                  required: ['StreamName', 'StreamARN', 'StreamStatus', 'Shards', 'HasMoreShards', 'RetentionPeriodHours', 'StreamCreationTimestamp', 'EnhancedMonitoring'],
                  members: {
                    StreamName: {},
                    StreamARN: {},
                    StreamStatus: {},
                    StreamModeDetails: {
                      shape: 'S9'
                    },
                    Shards: {
                      shape: 'Sv'
                    },
                    HasMoreShards: {
                      type: 'boolean'
                    },
                    RetentionPeriodHours: {
                      type: 'integer'
                    },
                    StreamCreationTimestamp: {
                      type: 'timestamp'
                    },
                    EnhancedMonitoring: {
                      shape: 'S12'
                    },
                    EncryptionType: {},
                    KeyId: {}
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          DescribeStreamConsumer: {
            input: {
              type: 'structure',
              members: {
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                },
                ConsumerName: {},
                ConsumerARN: {
                  contextParam: {
                    name: 'ConsumerARN'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ConsumerDescription'],
              members: {
                ConsumerDescription: {
                  type: 'structure',
                  required: ['ConsumerName', 'ConsumerARN', 'ConsumerStatus', 'ConsumerCreationTimestamp', 'StreamARN'],
                  members: {
                    ConsumerName: {},
                    ConsumerARN: {},
                    ConsumerStatus: {},
                    ConsumerCreationTimestamp: {
                      type: 'timestamp'
                    },
                    StreamARN: {}
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          DescribeStreamSummary: {
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['StreamDescriptionSummary'],
              members: {
                StreamDescriptionSummary: {
                  type: 'structure',
                  required: ['StreamName', 'StreamARN', 'StreamStatus', 'RetentionPeriodHours', 'StreamCreationTimestamp', 'EnhancedMonitoring', 'OpenShardCount'],
                  members: {
                    StreamName: {},
                    StreamARN: {},
                    StreamStatus: {},
                    StreamModeDetails: {
                      shape: 'S9'
                    },
                    RetentionPeriodHours: {
                      type: 'integer'
                    },
                    StreamCreationTimestamp: {
                      type: 'timestamp'
                    },
                    EnhancedMonitoring: {
                      shape: 'S12'
                    },
                    EncryptionType: {},
                    KeyId: {},
                    OpenShardCount: {
                      type: 'integer'
                    },
                    ConsumerCount: {
                      type: 'integer'
                    }
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          DisableEnhancedMonitoring: {
            input: {
              type: 'structure',
              required: ['ShardLevelMetrics'],
              members: {
                StreamName: {},
                ShardLevelMetrics: {
                  shape: 'S14'
                },
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            output: {
              shape: 'S1h'
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          EnableEnhancedMonitoring: {
            input: {
              type: 'structure',
              required: ['ShardLevelMetrics'],
              members: {
                StreamName: {},
                ShardLevelMetrics: {
                  shape: 'S14'
                },
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            output: {
              shape: 'S1h'
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          GetRecords: {
            input: {
              type: 'structure',
              required: ['ShardIterator'],
              members: {
                ShardIterator: {},
                Limit: {
                  type: 'integer'
                },
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Records'],
              members: {
                Records: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SequenceNumber', 'Data', 'PartitionKey'],
                    members: {
                      SequenceNumber: {},
                      ApproximateArrivalTimestamp: {
                        type: 'timestamp'
                      },
                      Data: {
                        type: 'blob'
                      },
                      PartitionKey: {},
                      EncryptionType: {}
                    }
                  }
                },
                NextShardIterator: {},
                MillisBehindLatest: {
                  type: 'long'
                },
                ChildShards: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ShardId', 'ParentShards', 'HashKeyRange'],
                    members: {
                      ShardId: {},
                      ParentShards: {
                        type: 'list',
                        member: {}
                      },
                      HashKeyRange: {
                        shape: 'Sx'
                      }
                    }
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'data'
              }
            }
          },
          GetResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {
                  contextParam: {
                    name: 'ResourceARN'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Policy'],
              members: {
                Policy: {}
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          GetShardIterator: {
            input: {
              type: 'structure',
              required: ['ShardId', 'ShardIteratorType'],
              members: {
                StreamName: {},
                ShardId: {},
                ShardIteratorType: {},
                StartingSequenceNumber: {},
                Timestamp: {
                  type: 'timestamp'
                },
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ShardIterator: {}
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'data'
              }
            }
          },
          IncreaseStreamRetentionPeriod: {
            input: {
              type: 'structure',
              required: ['RetentionPeriodHours'],
              members: {
                StreamName: {},
                RetentionPeriodHours: {
                  type: 'integer'
                },
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          ListShards: {
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                NextToken: {},
                ExclusiveStartShardId: {},
                MaxResults: {
                  type: 'integer'
                },
                StreamCreationTimestamp: {
                  type: 'timestamp'
                },
                ShardFilter: {
                  type: 'structure',
                  required: ['Type'],
                  members: {
                    Type: {},
                    ShardId: {},
                    Timestamp: {
                      type: 'timestamp'
                    }
                  }
                },
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Shards: {
                  shape: 'Sv'
                },
                NextToken: {}
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          ListStreamConsumers: {
            input: {
              type: 'structure',
              required: ['StreamARN'],
              members: {
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                StreamCreationTimestamp: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Consumers: {
                  type: 'list',
                  member: {
                    shape: 'S2c'
                  }
                },
                NextToken: {}
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          ListStreams: {
            input: {
              type: 'structure',
              members: {
                Limit: {
                  type: 'integer'
                },
                ExclusiveStartStreamName: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['StreamNames', 'HasMoreStreams'],
              members: {
                StreamNames: {
                  type: 'list',
                  member: {}
                },
                HasMoreStreams: {
                  type: 'boolean'
                },
                NextToken: {},
                StreamSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StreamName', 'StreamARN', 'StreamStatus'],
                    members: {
                      StreamName: {},
                      StreamARN: {},
                      StreamStatus: {},
                      StreamModeDetails: {
                        shape: 'S9'
                      },
                      StreamCreationTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTagsForStream: {
            input: {
              type: 'structure',
              members: {
                StreamName: {},
                ExclusiveStartTagKey: {},
                Limit: {
                  type: 'integer'
                },
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Tags', 'HasMoreTags'],
              members: {
                Tags: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key'],
                    members: {
                      Key: {},
                      Value: {}
                    }
                  }
                },
                HasMoreTags: {
                  type: 'boolean'
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          MergeShards: {
            input: {
              type: 'structure',
              required: ['ShardToMerge', 'AdjacentShardToMerge'],
              members: {
                StreamName: {},
                ShardToMerge: {},
                AdjacentShardToMerge: {},
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          PutRecord: {
            input: {
              type: 'structure',
              required: ['Data', 'PartitionKey'],
              members: {
                StreamName: {},
                Data: {
                  type: 'blob'
                },
                PartitionKey: {},
                ExplicitHashKey: {},
                SequenceNumberForOrdering: {},
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ShardId', 'SequenceNumber'],
              members: {
                ShardId: {},
                SequenceNumber: {},
                EncryptionType: {}
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'data'
              }
            }
          },
          PutRecords: {
            input: {
              type: 'structure',
              required: ['Records'],
              members: {
                Records: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Data', 'PartitionKey'],
                    members: {
                      Data: {
                        type: 'blob'
                      },
                      ExplicitHashKey: {},
                      PartitionKey: {}
                    }
                  }
                },
                StreamName: {},
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Records'],
              members: {
                FailedRecordCount: {
                  type: 'integer'
                },
                Records: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SequenceNumber: {},
                      ShardId: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                },
                EncryptionType: {}
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'data'
              }
            }
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Policy'],
              members: {
                ResourceARN: {
                  contextParam: {
                    name: 'ResourceARN'
                  }
                },
                Policy: {}
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          RegisterStreamConsumer: {
            input: {
              type: 'structure',
              required: ['StreamARN', 'ConsumerName'],
              members: {
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                },
                ConsumerName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Consumer'],
              members: {
                Consumer: {
                  shape: 'S2c'
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          RemoveTagsFromStream: {
            input: {
              type: 'structure',
              required: ['TagKeys'],
              members: {
                StreamName: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                },
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          SplitShard: {
            input: {
              type: 'structure',
              required: ['ShardToSplit', 'NewStartingHashKey'],
              members: {
                StreamName: {},
                ShardToSplit: {},
                NewStartingHashKey: {},
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          StartStreamEncryption: {
            input: {
              type: 'structure',
              required: ['EncryptionType', 'KeyId'],
              members: {
                StreamName: {},
                EncryptionType: {},
                KeyId: {},
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          StopStreamEncryption: {
            input: {
              type: 'structure',
              required: ['EncryptionType', 'KeyId'],
              members: {
                StreamName: {},
                EncryptionType: {},
                KeyId: {},
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          UpdateShardCount: {
            input: {
              type: 'structure',
              required: ['TargetShardCount', 'ScalingType'],
              members: {
                StreamName: {},
                TargetShardCount: {
                  type: 'integer'
                },
                ScalingType: {},
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamName: {},
                CurrentShardCount: {
                  type: 'integer'
                },
                TargetShardCount: {
                  type: 'integer'
                },
                StreamARN: {}
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          },
          UpdateStreamMode: {
            input: {
              type: 'structure',
              required: ['StreamARN', 'StreamModeDetails'],
              members: {
                StreamARN: {
                  contextParam: {
                    name: 'StreamARN'
                  }
                },
                StreamModeDetails: {
                  shape: 'S9'
                }
              }
            },
            staticContextParams: {
              OperationType: {
                value: 'control'
              }
            }
          }
        },
        shapes: {
          S9: {
            type: 'structure',
            required: ['StreamMode'],
            members: {
              StreamMode: {}
            }
          },
          Sv: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ShardId', 'HashKeyRange', 'SequenceNumberRange'],
              members: {
                ShardId: {},
                ParentShardId: {},
                AdjacentParentShardId: {},
                HashKeyRange: {
                  shape: 'Sx'
                },
                SequenceNumberRange: {
                  type: 'structure',
                  required: ['StartingSequenceNumber'],
                  members: {
                    StartingSequenceNumber: {},
                    EndingSequenceNumber: {}
                  }
                }
              }
            }
          },
          Sx: {
            type: 'structure',
            required: ['StartingHashKey', 'EndingHashKey'],
            members: {
              StartingHashKey: {},
              EndingHashKey: {}
            }
          },
          S12: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ShardLevelMetrics: {
                  shape: 'S14'
                }
              }
            }
          },
          S14: {
            type: 'list',
            member: {}
          },
          S1h: {
            type: 'structure',
            members: {
              StreamName: {},
              CurrentShardLevelMetrics: {
                shape: 'S14'
              },
              DesiredShardLevelMetrics: {
                shape: 'S14'
              },
              StreamARN: {}
            }
          },
          S2c: {
            type: 'structure',
            required: ['ConsumerName', 'ConsumerARN', 'ConsumerStatus', 'ConsumerCreationTimestamp'],
            members: {
              ConsumerName: {},
              ConsumerARN: {},
              ConsumerStatus: {},
              ConsumerCreationTimestamp: {
                type: 'timestamp'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5bd5f52ed931e95ac5e829e8dedb4489f99a9bd9.js.map