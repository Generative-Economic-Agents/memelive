System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2012-08-10',
          endpointPrefix: 'streams.dynamodb',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'Amazon DynamoDB Streams',
          serviceId: 'DynamoDB Streams',
          signatureVersion: 'v4',
          signingName: 'dynamodb',
          targetPrefix: 'DynamoDBStreams_20120810',
          uid: 'streams-dynamodb-2012-08-10'
        },
        operations: {
          DescribeStream: {
            input: {
              type: 'structure',
              required: ['StreamArn'],
              members: {
                StreamArn: {},
                Limit: {
                  type: 'integer'
                },
                ExclusiveStartShardId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamDescription: {
                  type: 'structure',
                  members: {
                    StreamArn: {},
                    StreamLabel: {},
                    StreamStatus: {},
                    StreamViewType: {},
                    CreationRequestDateTime: {
                      type: 'timestamp'
                    },
                    TableName: {},
                    KeySchema: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['AttributeName', 'KeyType'],
                        members: {
                          AttributeName: {},
                          KeyType: {}
                        }
                      }
                    },
                    Shards: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ShardId: {},
                          SequenceNumberRange: {
                            type: 'structure',
                            members: {
                              StartingSequenceNumber: {},
                              EndingSequenceNumber: {}
                            }
                          },
                          ParentShardId: {}
                        }
                      }
                    },
                    LastEvaluatedShardId: {}
                  }
                }
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
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Records: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      eventID: {},
                      eventName: {},
                      eventVersion: {},
                      eventSource: {},
                      awsRegion: {},
                      dynamodb: {
                        type: 'structure',
                        members: {
                          ApproximateCreationDateTime: {
                            type: 'timestamp'
                          },
                          Keys: {
                            shape: 'Sr'
                          },
                          NewImage: {
                            shape: 'Sr'
                          },
                          OldImage: {
                            shape: 'Sr'
                          },
                          SequenceNumber: {},
                          SizeBytes: {
                            type: 'long'
                          },
                          StreamViewType: {}
                        }
                      },
                      userIdentity: {
                        type: 'structure',
                        members: {
                          PrincipalId: {},
                          Type: {}
                        }
                      }
                    }
                  }
                },
                NextShardIterator: {}
              }
            }
          },
          GetShardIterator: {
            input: {
              type: 'structure',
              required: ['StreamArn', 'ShardId', 'ShardIteratorType'],
              members: {
                StreamArn: {},
                ShardId: {},
                ShardIteratorType: {},
                SequenceNumber: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ShardIterator: {}
              }
            }
          },
          ListStreams: {
            input: {
              type: 'structure',
              members: {
                TableName: {},
                Limit: {
                  type: 'integer'
                },
                ExclusiveStartStreamArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Streams: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StreamArn: {},
                      TableName: {},
                      StreamLabel: {}
                    }
                  }
                },
                LastEvaluatedStreamArn: {}
              }
            }
          }
        },
        shapes: {
          Sr: {
            type: 'map',
            key: {},
            value: {
              shape: 'St'
            }
          },
          St: {
            type: 'structure',
            members: {
              S: {},
              N: {},
              B: {
                type: 'blob'
              },
              SS: {
                type: 'list',
                member: {}
              },
              NS: {
                type: 'list',
                member: {}
              },
              BS: {
                type: 'list',
                member: {
                  type: 'blob'
                }
              },
              M: {
                type: 'map',
                key: {},
                value: {
                  shape: 'St'
                }
              },
              L: {
                type: 'list',
                member: {
                  shape: 'St'
                }
              },
              NULL: {
                type: 'boolean'
              },
              BOOL: {
                type: 'boolean'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b4a793e99d52a09eee10cad07d0e080ffc9cc283.js.map