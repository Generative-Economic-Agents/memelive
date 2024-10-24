System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2011-12-05',
          endpointPrefix: 'dynamodb',
          jsonVersion: '1.0',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'DynamoDB',
          serviceFullName: 'Amazon DynamoDB',
          serviceId: 'DynamoDB',
          signatureVersion: 'v4',
          targetPrefix: 'DynamoDB_20111205',
          uid: 'dynamodb-2011-12-05'
        },
        operations: {
          BatchGetItem: {
            input: {
              type: 'structure',
              required: ['RequestItems'],
              members: {
                RequestItems: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Responses: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      Items: {
                        shape: 'Sk'
                      },
                      ConsumedCapacityUnits: {
                        type: 'double'
                      }
                    }
                  }
                },
                UnprocessedKeys: {
                  shape: 'S2'
                }
              }
            }
          },
          BatchWriteItem: {
            input: {
              type: 'structure',
              required: ['RequestItems'],
              members: {
                RequestItems: {
                  shape: 'So'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Responses: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      ConsumedCapacityUnits: {
                        type: 'double'
                      }
                    }
                  }
                },
                UnprocessedItems: {
                  shape: 'So'
                }
              }
            }
          },
          CreateTable: {
            input: {
              type: 'structure',
              required: ['TableName', 'KeySchema', 'ProvisionedThroughput'],
              members: {
                TableName: {},
                KeySchema: {
                  shape: 'Sy'
                },
                ProvisionedThroughput: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TableDescription: {
                  shape: 'S15'
                }
              }
            }
          },
          DeleteItem: {
            input: {
              type: 'structure',
              required: ['TableName', 'Key'],
              members: {
                TableName: {},
                Key: {
                  shape: 'S6'
                },
                Expected: {
                  shape: 'S1b'
                },
                ReturnValues: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'Sl'
                },
                ConsumedCapacityUnits: {
                  type: 'double'
                }
              }
            }
          },
          DeleteTable: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TableDescription: {
                  shape: 'S15'
                }
              }
            }
          },
          DescribeTable: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Table: {
                  shape: 'S15'
                }
              }
            }
          },
          GetItem: {
            input: {
              type: 'structure',
              required: ['TableName', 'Key'],
              members: {
                TableName: {},
                Key: {
                  shape: 'S6'
                },
                AttributesToGet: {
                  shape: 'Se'
                },
                ConsistentRead: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Item: {
                  shape: 'Sl'
                },
                ConsumedCapacityUnits: {
                  type: 'double'
                }
              }
            }
          },
          ListTables: {
            input: {
              type: 'structure',
              members: {
                ExclusiveStartTableName: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TableNames: {
                  type: 'list',
                  member: {}
                },
                LastEvaluatedTableName: {}
              }
            }
          },
          PutItem: {
            input: {
              type: 'structure',
              required: ['TableName', 'Item'],
              members: {
                TableName: {},
                Item: {
                  shape: 'Ss'
                },
                Expected: {
                  shape: 'S1b'
                },
                ReturnValues: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'Sl'
                },
                ConsumedCapacityUnits: {
                  type: 'double'
                }
              }
            }
          },
          Query: {
            input: {
              type: 'structure',
              required: ['TableName', 'HashKeyValue'],
              members: {
                TableName: {},
                AttributesToGet: {
                  shape: 'Se'
                },
                Limit: {
                  type: 'integer'
                },
                ConsistentRead: {
                  type: 'boolean'
                },
                Count: {
                  type: 'boolean'
                },
                HashKeyValue: {
                  shape: 'S7'
                },
                RangeKeyCondition: {
                  shape: 'S1u'
                },
                ScanIndexForward: {
                  type: 'boolean'
                },
                ExclusiveStartKey: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  shape: 'Sk'
                },
                Count: {
                  type: 'integer'
                },
                LastEvaluatedKey: {
                  shape: 'S6'
                },
                ConsumedCapacityUnits: {
                  type: 'double'
                }
              }
            }
          },
          Scan: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {},
                AttributesToGet: {
                  shape: 'Se'
                },
                Limit: {
                  type: 'integer'
                },
                Count: {
                  type: 'boolean'
                },
                ScanFilter: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'S1u'
                  }
                },
                ExclusiveStartKey: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  shape: 'Sk'
                },
                Count: {
                  type: 'integer'
                },
                ScannedCount: {
                  type: 'integer'
                },
                LastEvaluatedKey: {
                  shape: 'S6'
                },
                ConsumedCapacityUnits: {
                  type: 'double'
                }
              }
            }
          },
          UpdateItem: {
            input: {
              type: 'structure',
              required: ['TableName', 'Key', 'AttributeUpdates'],
              members: {
                TableName: {},
                Key: {
                  shape: 'S6'
                },
                AttributeUpdates: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      Value: {
                        shape: 'S7'
                      },
                      Action: {}
                    }
                  }
                },
                Expected: {
                  shape: 'S1b'
                },
                ReturnValues: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'Sl'
                },
                ConsumedCapacityUnits: {
                  type: 'double'
                }
              }
            }
          },
          UpdateTable: {
            input: {
              type: 'structure',
              required: ['TableName', 'ProvisionedThroughput'],
              members: {
                TableName: {},
                ProvisionedThroughput: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TableDescription: {
                  shape: 'S15'
                }
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['Keys'],
              members: {
                Keys: {
                  type: 'list',
                  member: {
                    shape: 'S6'
                  }
                },
                AttributesToGet: {
                  shape: 'Se'
                },
                ConsistentRead: {
                  type: 'boolean'
                }
              }
            }
          },
          S6: {
            type: 'structure',
            required: ['HashKeyElement'],
            members: {
              HashKeyElement: {
                shape: 'S7'
              },
              RangeKeyElement: {
                shape: 'S7'
              }
            }
          },
          S7: {
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
              }
            }
          },
          Se: {
            type: 'list',
            member: {}
          },
          Sk: {
            type: 'list',
            member: {
              shape: 'Sl'
            }
          },
          Sl: {
            type: 'map',
            key: {},
            value: {
              shape: 'S7'
            }
          },
          So: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {
                type: 'structure',
                members: {
                  PutRequest: {
                    type: 'structure',
                    required: ['Item'],
                    members: {
                      Item: {
                        shape: 'Ss'
                      }
                    }
                  },
                  DeleteRequest: {
                    type: 'structure',
                    required: ['Key'],
                    members: {
                      Key: {
                        shape: 'S6'
                      }
                    }
                  }
                }
              }
            }
          },
          Ss: {
            type: 'map',
            key: {},
            value: {
              shape: 'S7'
            }
          },
          Sy: {
            type: 'structure',
            required: ['HashKeyElement'],
            members: {
              HashKeyElement: {
                shape: 'Sz'
              },
              RangeKeyElement: {
                shape: 'Sz'
              }
            }
          },
          Sz: {
            type: 'structure',
            required: ['AttributeName', 'AttributeType'],
            members: {
              AttributeName: {},
              AttributeType: {}
            }
          },
          S12: {
            type: 'structure',
            required: ['ReadCapacityUnits', 'WriteCapacityUnits'],
            members: {
              ReadCapacityUnits: {
                type: 'long'
              },
              WriteCapacityUnits: {
                type: 'long'
              }
            }
          },
          S15: {
            type: 'structure',
            members: {
              TableName: {},
              KeySchema: {
                shape: 'Sy'
              },
              TableStatus: {},
              CreationDateTime: {
                type: 'timestamp'
              },
              ProvisionedThroughput: {
                type: 'structure',
                members: {
                  LastIncreaseDateTime: {
                    type: 'timestamp'
                  },
                  LastDecreaseDateTime: {
                    type: 'timestamp'
                  },
                  NumberOfDecreasesToday: {
                    type: 'long'
                  },
                  ReadCapacityUnits: {
                    type: 'long'
                  },
                  WriteCapacityUnits: {
                    type: 'long'
                  }
                }
              },
              TableSizeBytes: {
                type: 'long'
              },
              ItemCount: {
                type: 'long'
              }
            }
          },
          S1b: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Value: {
                  shape: 'S7'
                },
                Exists: {
                  type: 'boolean'
                }
              }
            }
          },
          S1u: {
            type: 'structure',
            required: ['ComparisonOperator'],
            members: {
              AttributeValueList: {
                type: 'list',
                member: {
                  shape: 'S7'
                }
              },
              ComparisonOperator: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3aa4dfa17a3bdee0e013987211ebd401f2ec2bc5.js.map